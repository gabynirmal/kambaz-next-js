"use client";

import {
  Form,
  FormControl,
  FormCheck,
  FormLabel,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { addAssignment, updateAssignment } from "../../assignments/reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { useState } from "react";
import * as client from "../../assignments/client";
import QuizQuestions from "./QuizQuestions";

export default function QuizEditor() {
  const { qid, cid } = useParams();
  const [activeTab, setActiveTab] = useState<"details" | "questions">(
    "details",
  );
  const router = useRouter();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );
  const dispatch = useDispatch();
  const existingAssignment = assignments.find((a: any) => a._id === qid);
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: qid,
      title: "New Quiz",
      description: "",
      points: 100,
      assignmentGroup: "QUIZZES",
      isPublished: false,
      due: "2024-05-13T23:59",
      not_available_until: "2024-05-13T23:59",
      course: cid,
    },
  );

  const onUpdateAssignment = async (a = assignment) => {
    await client.updateAssignment(cid as string, a);
    dispatch(updateAssignment(a));
  };

  const onCreateAssignment = async (a = assignment) => {
    await client.createAssignment(cid as string, a);
    dispatch(addAssignment(a));
  };

  return (
    <Form id="wd-quizzes-editor" className="d-flex flex-column gap-4 pt-2 ps-5">
      {/* Tabs */}
      <div className="d-flex border-bottom">
        <button
          type="button"
          className={`btn btn-link text-decoration-none px-4 py-2 ${activeTab === "details" ? "border-bottom border-danger border-2 text-danger fw-bold" : "text-dark"}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          type="button"
          className={`btn btn-link text-decoration-none px-4 py-2 ${activeTab === "questions" ? "border-bottom border-danger border-2 text-danger fw-bold" : "text-dark"}`}
          onClick={() => setActiveTab("questions")}
        >
          Questions
        </button>
      </div>

      {/* Details Tab */}
      {activeTab === "details" && (
        <div className="d-flex flex-column gap-4">
          {/* Quiz Name */}
          <div>
            <FormLabel htmlFor="wd-assignment-name">Quiz Name</FormLabel>
            <FormControl
              id="wd-assignment-name"
              type="text"
              value={assignment?.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
            />
          </div>

          {/* Quiz Instructions */}
          <div>
            <FormLabel htmlFor="assignment-description">
              Quiz Instructions
            </FormLabel>
            <FormControl
              as="textarea"
              id="assignment-description"
              style={{ height: 200 }}
              value={assignment?.description}
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
            />
          </div>

          <div className="d-flex flex-column gap-4 align-items-end">
            {/* Points */}
            <div className="d-flex gap-2 align-items-center">
              <FormLabel htmlFor="wd-assignment-points">Points</FormLabel>
              <FormControl
                id="wd-assignment-points"
                type="number"
                value={assignment?.points}
                style={{ width: 1000 }}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: parseInt(e.target.value),
                  })
                }
              />
            </div>

            {/* Assignment Group */}
            <div className="d-flex gap-2 align-items-center">
              <FormLabel htmlFor="wd-assignment-group" className="text-nowrap">
                Assignment Group
              </FormLabel>
              <Dropdown
                id="wd-assignment-group"
                className="rounded border-1 border border-gray"
                style={{ width: 1000 }}
              >
                <DropdownToggle className="text-black d-flex align-items-center justify-content-between w-100">
                  {assignment?.assignmentGroup || "QUIZZES"}
                </DropdownToggle>
                <DropdownMenu className="w-100">
                  {["ASSIGNMENTS", "QUIZZES", "EXAMS"].map((group) => (
                    <DropdownItem
                      key={group}
                      onClick={() =>
                        setAssignment({ ...assignment, assignmentGroup: group })
                      }
                    >
                      {group}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Display Grade as */}
            <div className="d-flex gap-2 align-items-center">
              <FormLabel
                htmlFor="wd-assignment-display-grade"
                className="text-nowrap"
              >
                Display Grade as
              </FormLabel>
              <Dropdown
                id="wd-assignment-display-grade"
                className="rounded border-1 border border-gray"
                style={{ width: 1000 }}
              >
                <DropdownToggle className="text-black d-flex align-items-center justify-content-between w-100">
                  Percentage
                </DropdownToggle>
                <DropdownMenu className="w-100">
                  <DropdownItem>Percentage</DropdownItem>
                  <DropdownItem>Letter</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Options */}
            <div className="d-flex gap-2">
              <FormLabel className="text-nowrap fw-bold">Options</FormLabel>
              <div
                className="d-flex flex-column gap-3 border border-1 rounded p-4"
                style={{ width: 1000 }}
              >
                <FormCheck
                  id="wd-shuffle-answers"
                  type="checkbox"
                  label="Shuffle Answers"
                  checked={assignment?.shuffleAnswers || false}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      shuffleAnswers: e.target.checked,
                    })
                  }
                />

                <div className="d-flex align-items-center gap-2">
                  <FormCheck
                    id="wd-time-limit"
                    type="checkbox"
                    label="Time Limit"
                    checked={assignment?.hasTimeLimit || false}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        hasTimeLimit: e.target.checked,
                      })
                    }
                  />
                  <FormControl
                    type="number"
                    style={{ width: 80 }}
                    value={assignment?.timeLimit || ""}
                    disabled={!assignment?.hasTimeLimit}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        timeLimit: parseInt(e.target.value),
                      })
                    }
                  />
                  <span>Minutes</span>
                </div>

                <div className="border border-1 rounded p-2">
                  <FormCheck
                    id="wd-multiple-attempts"
                    type="checkbox"
                    label="Allow Multiple Attempts"
                    checked={assignment?.multipleAttempts || false}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        multipleAttempts: e.target.checked,
                      })
                    }
                  />
                  {assignment?.multipleAttempts && (
                    <div className="d-flex align-items-center gap-2 mt-2 ps-4">
                      <FormLabel className="text-nowrap mb-0">
                        How Many Attempts
                      </FormLabel>
                      <FormControl
                        type="number"
                        style={{ width: 80 }}
                        value={assignment?.howManyAttempts || 1}
                        min={1}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            howManyAttempts: parseInt(e.target.value) || 1,
                          })
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Assign */}
            <div className="d-flex gap-2">
              <FormLabel
                htmlFor="wd-assignment-assign-to-section"
                className="text-nowrap"
              >
                Assign To
              </FormLabel>
              <div
                className="d-flex flex-column border border-1 rounded p-4"
                style={{ width: 1000 }}
              >
                <FormLabel
                  htmlFor="wd-assignment-assign-to"
                  className="text-nowrap"
                >
                  <span className="fs-5">Assign To</span>
                </FormLabel>
                <FormControl id="wd-assignment-assign-to" type="text" />

                <FormLabel
                  htmlFor="wd-assignment-due-date"
                  className="text-nowrap pt-2"
                >
                  <span className="fs-5">Due</span>
                </FormLabel>
                <FormControl
                  id="wd-assignment-due-date"
                  type="datetime-local"
                  value={assignment?.due}
                  onChange={(e) =>
                    setAssignment({ ...assignment, due: e.target.value })
                  }
                />

                <Row>
                  <Col>
                    <FormLabel
                      htmlFor="wd-assignment-available-from-date"
                      className="text-nowrap pt-2"
                    >
                      <span className="fs-5">Available from</span>
                    </FormLabel>
                  </Col>
                  <Col>
                    <FormLabel
                      htmlFor="wd-assignment-available-until-date"
                      className="text-nowrap pt-2"
                    >
                      <span className="fs-5">Until</span>
                    </FormLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl
                      id="wd-assignment-available-from-date"
                      type="datetime-local"
                      value={assignment?.not_available_until}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          not_available_until: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col>
                    <FormControl
                      id="wd-assignment-available-until-date"
                      type="datetime-local"
                      defaultValue={assignment?.due}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Questions Tab */}
      {activeTab === "questions" && (
        <QuizQuestions
          questions={assignment?.questions || []}
          onChange={(questions) => setAssignment({ ...assignment, questions })}
        />
      )}

      {/* Cancel and Save Buttons */}
      <div className="d-flex flex-column w-100">
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            size="lg"
            id="wd-assignment-editor-cancel"
            onClick={() => router.push(`/courses/${cid}/quizzes`)}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-danger ms-2"
            size="lg"
            id="wd-assignment-editor-save"
            onClick={() => {
              if (existingAssignment) {
                onUpdateAssignment();
              } else {
                onCreateAssignment();
              }
              router.push(`/courses/${cid}/quizzes`);
            }}
          >
            Save
          </Button>
          <Button
            className="btn btn-danger ms-2"
            size="lg"
            id="wd-assignment-editor-save"
            onClick={() => {
              const published = { ...assignment, isPublished: true };
              setAssignment(published);
              if (existingAssignment) {
                onUpdateAssignment(published);
              } else {
                onCreateAssignment(published);
              }
              router.push(`/courses/${cid}/quizzes`);
            }}
          >
            Save & Publish
          </Button>
        </div>
      </div>
    </Form>
  );
}
