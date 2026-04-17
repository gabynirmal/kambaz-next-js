"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { Button } from "react-bootstrap";
import { FaExclamationCircle } from "react-icons/fa";
import * as client from "../../../assignments/client";
import { updateAssignment, setAssignments } from "../../../assignments/reducer";

interface Choice {
  _id: string;
  text: string;
}

interface Question {
  _id: string;
  type: "multiple_choice" | "true_false" | "fill_in_blank";
  title: string;
  points: number;
  question: string;
  choices: Choice[];
  correctAnswer: string;
  correctAnswers: string[];
}

interface QuizAttempt {
  studentId: string;
  answers: Record<string, string>;
  score: number;
  submittedAt: string;
}

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );

  const quiz = assignments.find((a: any) => a._id === qid);
  const isFaculty = currentUser?.role === "FACULTY";
  const questions: Question[] = quiz?.questions || [];
  const maxAttempts = quiz?.multipleAttempts ? quiz?.howManyAttempts || 1 : 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);
  const [localAttemptCount, setLocalAttemptCount] = useState(0);

  const [timeLeft, setTimeLeft] = useState<number | null>(
    !isFaculty && quiz?.hasTimeLimit ? (quiz.timeLimit || 0) * 60 : null,
  );

  // Fetch fresh data on mount and sync attempt count + last attempt
  useEffect(() => {
    client.findAssignmentsforCourse(cid as string).then((data) => {
      dispatch(setAssignments(data));
      const freshQuiz = data.find((a: any) => a._id === qid);
      if (!isFaculty && freshQuiz?.attempts) {
        const myAttempts = freshQuiz.attempts.filter(
          (a: QuizAttempt) => a.studentId === currentUser?._id,
        );
        setLocalAttemptCount(myAttempts.length);
        if (myAttempts.length > 0) {
          setLastAttempt(myAttempts[myAttempts.length - 1]);
        }
      }
    });
  }, []);

  // Timer — students only
  useEffect(() => {
    if (timeLeft === null || submitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  const currentQuestion = questions[currentIndex];

  const isCorrect = (question: Question, answer: string): boolean => {
    if (question.type === "fill_in_blank") {
      return (question.correctAnswers || []).some(
        (a) => a.toLowerCase() === answer.toLowerCase(),
      );
    }
    return answer === question.correctAnswer;
  };

  const calculateScore = (ans: Record<string, string>) => {
    return questions.reduce((total, q) => {
      if (isCorrect(q, ans[q._id] || "")) return total + (q.points || 0);
      return total;
    }, 0);
  };

  const handleSubmit = async () => {
    if (!isFaculty && localAttemptCount >= maxAttempts) return;

    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setSubmitted(true);
    setLocalAttemptCount((prev) => prev + 1);

    if (!isFaculty && quiz) {
      const attempt: QuizAttempt = {
        studentId: currentUser._id,
        answers,
        score: finalScore,
        submittedAt: new Date().toISOString(),
      };

      // Append — don't replace, so dbAttemptCount stays accurate on reload
      const updatedQuiz = {
        ...quiz,
        attempts: [...(quiz.attempts || []), attempt],
      };

      await client.updateAssignment(cid as string, updatedQuiz);
      dispatch(updateAssignment(updatedQuiz));
      setLastAttempt(attempt);
    }
  };

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);
  const hasExhaustedAttempts =
    !isFaculty && localAttemptCount >= maxAttempts && !submitted;

  // Student has exhausted attempts — show last attempt read-only
  if (hasExhaustedAttempts && lastAttempt) {
    return (
      <div className="container py-4" style={{ maxWidth: 800 }}>
        <h2>{quiz?.title}</h2>
        <div className="alert alert-info">
          You have used all {maxAttempts} attempt{maxAttempts !== 1 ? "s" : ""}.
          Showing your last attempt.
        </div>
        <ResultsView
          questions={questions}
          answers={lastAttempt.answers}
          score={lastAttempt.score}
          totalPoints={totalPoints}
          isCorrect={isCorrect}
          onRetake={null}
        />
      </div>
    );
  }

  // Submitted — show results
  if (submitted) {
    const canRetake =
      !isFaculty && quiz?.multipleAttempts && localAttemptCount < maxAttempts;

    return (
      <div className="container py-4" style={{ maxWidth: 800 }}>
        <h2>{quiz?.title}</h2>
        {!isFaculty && !canRetake && (
          <div className="alert alert-info">
            You have used all {maxAttempts} attempt
            {maxAttempts !== 1 ? "s" : ""}. Showing your last attempt.
          </div>
        )}
        <ResultsView
          questions={questions}
          answers={answers}
          score={score}
          totalPoints={totalPoints}
          isCorrect={isCorrect}
          onRetake={
            canRetake
              ? () => {
                  setAnswers({});
                  setSubmitted(false);
                  setCurrentIndex(0);
                  setTimeLeft(
                    !isFaculty && quiz?.hasTimeLimit
                      ? (quiz.timeLimit || 0) * 60
                      : null,
                  );
                }
              : null
          }
        />
        {isFaculty && (
          <Button
            className="btn-danger mt-3"
            onClick={() => router.push(`/courses/${cid}/quizzes/${qid}`)}
          >
            Edit Quiz
          </Button>
        )}
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="container py-4">
        <p className="text-muted">This quiz has no questions yet.</p>
        {isFaculty && (
          <Button
            className="btn-danger"
            onClick={() => router.push(`/courses/${cid}/quizzes/${qid}`)}
          >
            Edit Quiz
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="container py-4 border border-1" style={{ maxWidth: 800 }}>
      <h2>{quiz?.title}</h2>

      {/* Faculty preview banner */}
      {isFaculty && (
        <div
          className="alert d-flex align-items-center gap-2 mb-3"
          style={{ backgroundColor: "#fef3cd", border: "1px solid #ffc107" }}
        >
          <FaExclamationCircle className="text-warning" />
          <span>This is a preview of the published version of the quiz</span>
        </div>
      )}

      {/* Quiz instructions */}
      {quiz?.description && (
        <>
          <p className="text-muted">
            Started:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}{" "}
            at{" "}
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <h4>Quiz Instructions</h4>
          <div
            dangerouslySetInnerHTML={{ __html: quiz.description }}
            className="mb-4 border-bottom pb-3"
          />
        </>
      )}

      {/* Question card */}
      <div className="border rounded mb-3">
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
          <span className="fw-bold">Question {currentIndex + 1}</span>
          <span>{currentQuestion.points} pts</span>
        </div>

        <div className="p-4">
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: currentQuestion.question || currentQuestion.title,
            }}
          />

          {/* Multiple Choice */}
          {currentQuestion.type === "multiple_choice" && (
            <div className="d-flex flex-column gap-2">
              {currentQuestion.choices.map((choice) => (
                <label
                  key={choice._id}
                  className="d-flex align-items-center gap-2 p-2 border rounded"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion._id}`}
                    checked={answers[currentQuestion._id] === choice.text}
                    onChange={() =>
                      setAnswers({
                        ...answers,
                        [currentQuestion._id]: choice.text,
                      })
                    }
                  />
                  <span>{choice.text}</span>
                </label>
              ))}
            </div>
          )}

          {/* True/False */}
          {currentQuestion.type === "true_false" && (
            <div className="d-flex flex-column gap-2">
              {["true", "false"].map((val) => (
                <label
                  key={val}
                  className="d-flex align-items-center gap-2 p-2 border rounded"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion._id}`}
                    checked={answers[currentQuestion._id] === val}
                    onChange={() =>
                      setAnswers({ ...answers, [currentQuestion._id]: val })
                    }
                  />
                  <span className="text-capitalize">{val}</span>
                </label>
              ))}
            </div>
          )}

          {/* Fill in the Blank */}
          {currentQuestion.type === "fill_in_blank" && (
            <input
              type="text"
              className="form-control"
              placeholder="Your answer..."
              value={answers[currentQuestion._id] || ""}
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  [currentQuestion._id]: e.target.value,
                })
              }
            />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="d-flex justify-content-end gap-2">
        {currentIndex > 0 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            ◀ Previous
          </Button>
        )}
        {currentIndex < questions.length - 1 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            Next ▶
          </Button>
        )}
      </div>

      {/* Submit bar */}
      <div className="d-flex justify-content-between align-items-center border-top mt-4 pt-3">
        <span className="text-muted fs-6">
          Quiz saved at{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </span>
        {timeLeft !== null && (
          <div
            className={`fw-bold ${timeLeft < 60 ? "text-danger" : "text-dark"}`}
          >
            Time remaining: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </div>
        )}
        <div className="d-flex gap-2">
          {isFaculty && (
            <Button
              variant="outline-secondary"
              onClick={() => router.push(`/courses/${cid}/quizzes/${qid}`)}
            >
              Edit Quiz
            </Button>
          )}
          <Button className="btn-danger" onClick={handleSubmit}>
            Submit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

function ResultsView({
  questions,
  answers,
  score,
  totalPoints,
  isCorrect,
  onRetake,
}: {
  questions: Question[];
  answers: Record<string, string>;
  score: number;
  totalPoints: number;
  isCorrect: (q: Question, a: string) => boolean;
  onRetake: (() => void) | null;
}) {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="alert alert-info fs-5">
        Score:{" "}
        <strong>
          {score} / {totalPoints}
        </strong>
      </div>

      {questions.map((q, i) => {
        const answer = answers[q._id] || "";
        const correct = isCorrect(q, answer);
        return (
          <div
            key={q._id}
            className={`border rounded p-3 ${correct ? "border-success" : "border-danger"}`}
          >
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold">Question {i + 1}</span>
              <span className={correct ? "text-success" : "text-danger"}>
                {correct ? `✓ +${q.points} pts` : `✗ 0 pts`}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: q.question || q.title }}
              className="mb-2"
            />
            <div className="text-muted fs-6">
              Your answer: <strong>{answer || "(no answer)"}</strong>
            </div>
            {!correct && (
              <div className="text-success fs-6 mt-1">
                Correct answer:{" "}
                <strong>
                  {q.type === "fill_in_blank"
                    ? (q.correctAnswers || []).join(" or ")
                    : q.correctAnswer}
                </strong>
              </div>
            )}
          </div>
        );
      })}

      {onRetake && (
        <Button className="btn-danger align-self-start" onClick={onRetake}>
          Retake Quiz
        </Button>
      )}
    </div>
  );
}
