"use client";

import { useState } from "react";
import {
  Button,
  FormControl,
  FormCheck,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import {
  FaTrash,
  FaPlus,
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

type QuestionType = "multiple_choice" | "true_false" | "fill_in_blank";

interface Choice {
  _id: string;
  text: string;
}

interface Question {
  _id: string;
  type: QuestionType;
  title: string;
  points: number;
  question: string;
  choices: Choice[];
  correctAnswer: string;
  correctAnswers: string[];
}

function newQuestion(): Question {
  return {
    _id: uuidv4(),
    type: "multiple_choice",
    title: "New Question",
    points: 1,
    question: "",
    choices: [
      { _id: uuidv4(), text: "" },
      { _id: uuidv4(), text: "" },
    ],
    correctAnswer: "",
    correctAnswers: [""],
  };
}

function QuestionEditor({
  question,
  onSave,
  onCancel,
}: {
  question: Question;
  onSave: (q: Question) => void;
  onCancel: () => void;
}) {
  // Draft is isolated — changes don't propagate until Save is clicked
  const [draft, setDraft] = useState<Question>({
    ...question,
    correctAnswers: question.correctAnswers?.length
      ? question.correctAnswers
      : [""],
  });

  const updateChoice = (id: string, text: string) => {
    setDraft({
      ...draft,
      choices: draft.choices.map((c) => (c._id === id ? { ...c, text } : c)),
    });
  };

  const addChoice = () => {
    setDraft({
      ...draft,
      choices: [...draft.choices, { _id: uuidv4(), text: "" }],
    });
  };

  const removeChoice = (_id: string) => {
    setDraft({ ...draft, choices: draft.choices.filter((c) => c._id !== _id) });
  };

  const addCorrectAnswer = () => {
    setDraft({
      ...draft,
      correctAnswers: [...(draft.correctAnswers || []), ""],
    });
  };

  const updateCorrectAnswer = (index: number, value: string) => {
    const updated = [...(draft.correctAnswers || [])];
    updated[index] = value;
    setDraft({ ...draft, correctAnswers: updated });
  };

  const removeCorrectAnswer = (index: number) => {
    setDraft({
      ...draft,
      correctAnswers: (draft.correctAnswers || []).filter(
        (_, i) => i !== index,
      ),
    });
  };

  const typeLabel = {
    multiple_choice: "Multiple Choice",
    true_false: "True/False",
    fill_in_blank: "Fill in the Blank",
  }[draft.type];

  return (
    <div className="border border-1 rounded p-4 d-flex flex-column gap-3 bg-white">
      {/* Header row */}
      <div className="d-flex align-items-center gap-3 flex-wrap">
        <FormControl
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          style={{ maxWidth: 250 }}
          placeholder="Question Title"
        />

        <Dropdown>
          <DropdownToggle className="text-black bg-white border">
            {typeLabel}
          </DropdownToggle>
          <DropdownMenu>
            {(
              [
                "multiple_choice",
                "true_false",
                "fill_in_blank",
              ] as QuestionType[]
            ).map((t) => (
              <DropdownItem
                key={t}
                onClick={() =>
                  setDraft({
                    ...draft,
                    type: t,
                    choices:
                      t === "true_false"
                        ? [
                            { _id: "true", text: "True" },
                            { _id: "false", text: "False" },
                          ]
                        : t === "multiple_choice"
                          ? draft.choices.length
                            ? draft.choices
                            : [
                                { _id: uuidv4(), text: "" },
                                { _id: uuidv4(), text: "" },
                              ]
                          : [],
                    correctAnswer: "",
                    correctAnswers: [""],
                  })
                }
              >
                {
                  {
                    multiple_choice: "Multiple Choice",
                    true_false: "True/False",
                    fill_in_blank: "Fill in the Blank",
                  }[t]
                }
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <div className="d-flex align-items-center gap-2 ms-auto">
          <span>pts:</span>
          <FormControl
            type="number"
            value={draft.points}
            onChange={(e) =>
              setDraft({ ...draft, points: parseInt(e.target.value) || 0 })
            }
            style={{ width: 70 }}
          />
        </div>
      </div>

      {/* Question WYSIWYG */}
      <div>
        <span className="fw-bold mb-2 d-block">Question</span>
        <div className="border rounded">
          <div className="d-flex gap-1 p-2 border-bottom bg-light">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                document.execCommand("bold");
              }}
            >
              <FaBold />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                document.execCommand("italic");
              }}
            >
              <FaItalic />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                document.execCommand("underline");
              }}
            >
              <FaUnderline />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                document.execCommand("insertUnorderedList");
              }}
            >
              <FaListUl />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                document.execCommand("insertOrderedList");
              }}
            >
              <FaListOl />
            </button>
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            className="p-2"
            style={{ minHeight: 120, outline: "none" }}
            dangerouslySetInnerHTML={{ __html: draft.question }}
            onBlur={(e) =>
              setDraft({ ...draft, question: e.currentTarget.innerHTML })
            }
          />
        </div>
      </div>

      {/* Multiple Choice Answers */}
      {draft.type === "multiple_choice" && (
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold">Answers</span>
          {draft.choices.map((choice) => (
            <div key={choice._id} className="d-flex align-items-center gap-2">
              <FormCheck
                type="radio"
                name={`correct-${draft._id}`}
                checked={draft.correctAnswer === choice.text}
                onChange={() =>
                  setDraft({ ...draft, correctAnswer: choice.text })
                }
                title="Mark as correct answer"
              />
              <FormControl
                as="textarea"
                rows={2}
                value={choice.text}
                placeholder="Answer text..."
                onChange={(e) => updateChoice(choice._id, e.target.value)}
              />
              <FaTrash
                className="text-danger"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => removeChoice(choice._id)}
              />
            </div>
          ))}
          <Button
            variant="link"
            className="text-danger p-0 align-self-start"
            onClick={addChoice}
          >
            <FaPlus className="me-1" /> Add Answer
          </Button>
        </div>
      )}

      {/* True/False */}
      {draft.type === "true_false" && (
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold">Correct Answer</span>
          {["true", "false"].map((val) => (
            <div key={val} className="d-flex align-items-center gap-2">
              <FormCheck
                type="radio"
                name={`correct-${draft._id}`}
                checked={draft.correctAnswer === val}
                onChange={() => setDraft({ ...draft, correctAnswer: val })}
              />
              <span className="text-capitalize">{val}</span>
            </div>
          ))}
        </div>
      )}

      {/* Fill in the Blank */}
      {draft.type === "fill_in_blank" && (
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold">Possible Correct Answers</span>
          <span className="text-muted fs-6">Answers are case-insensitive</span>
          {(draft.correctAnswers || [""]).map((answer, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              <FormControl
                value={answer}
                placeholder="Possible correct answer..."
                onChange={(e) => updateCorrectAnswer(index, e.target.value)}
              />
              <FaTrash
                className="text-danger"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => removeCorrectAnswer(index)}
              />
            </div>
          ))}
          <Button
            variant="link"
            className="text-danger p-0 align-self-start"
            onClick={addCorrectAnswer}
          >
            <FaPlus className="me-1" /> Add Answer
          </Button>
        </div>
      )}

      {/* Footer buttons */}
      <div className="d-flex justify-content-end gap-2 mt-2 border-top pt-3">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="btn-danger" onClick={() => onSave(draft)}>
          Save Question
        </Button>
      </div>
    </div>
  );
}

function QuestionPreview({
  question,
  onEdit,
  onDelete,
}: {
  question: Question;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const typeLabel = {
    multiple_choice: "Multiple Choice",
    true_false: "True/False",
    fill_in_blank: "Fill in the Blank",
  }[question.type];

  return (
    <div className="border border-1 rounded p-3 d-flex align-items-start gap-3 bg-white">
      <BsGripVertical className="fs-4 text-muted mt-1 flex-shrink-0" />
      <div className="flex-grow-1">
        <div className="d-flex align-items-center gap-2 mb-1">
          <span className="fw-bold">{question.title}</span>
          <span className="text-muted fs-6">— {typeLabel}</span>
        </div>
        <span
          className="text-muted fs-6"
          dangerouslySetInnerHTML={{
            __html: question.question || "No question text",
          }}
        />
      </div>
      <div className="d-flex align-items-center gap-3 flex-shrink-0">
        <span className="text-muted fs-6">{question.points} pts</span>
        <FaPencil
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={onEdit}
        />
        <FaTrash
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default function QuizQuestions({
  questions,
  onChange,
}: {
  questions: Question[];
  onChange: (questions: Question[]) => void;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  const addQuestion = () => {
    const q = newQuestion();
    onChange([...questions, q]);
    setEditingId(q._id);
  };

  const saveQuestion = (updated: Question) => {
    onChange(questions.map((q) => (q._id === updated._id ? updated : q)));
    setEditingId(null);
  };

  const cancelEdit = (id: string) => {
    // If it's a brand new unsaved question, remove it on cancel
    const q = questions.find((q) => q._id === id);
    if (q && q.title === "New Question" && q.question === "") {
      onChange(questions.filter((q) => q._id !== id));
    }
    setEditingId(null);
  };

  const deleteQuestion = (id: string) => {
    onChange(questions.filter((q) => q._id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="d-flex flex-column gap-3">
      {/* Points summary */}
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted">
          {questions.length} question{questions.length !== 1 ? "s" : ""}
        </span>
        <span className="fw-bold">Total: {totalPoints} pts</span>
      </div>

      {/* Empty state */}
      {questions.length === 0 && (
        <div className="text-center text-muted py-5 border border-1 rounded">
          No questions yet. Click <strong>+ New Question</strong> to add one.
        </div>
      )}

      {/* Question list */}
      {questions.map((q) =>
        editingId === q._id ? (
          <QuestionEditor
            key={q._id}
            question={q}
            onSave={saveQuestion}
            onCancel={() => cancelEdit(q._id)}
          />
        ) : (
          <QuestionPreview
            key={q._id}
            question={q}
            onEdit={() => setEditingId(q._id)}
            onDelete={() => deleteQuestion(q._id)}
          />
        ),
      )}

      {/* Add question button */}
      <Button className="btn-danger align-self-start" onClick={addQuestion}>
        <FaPlus className="me-2" />
        New Question
      </Button>
    </div>
  );
}
