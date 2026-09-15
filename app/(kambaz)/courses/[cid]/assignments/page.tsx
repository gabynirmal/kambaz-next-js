"use client";
import Link from "next/link";
import {
  FormControl,
  InputGroup,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import { SlMagnifier } from "react-icons/sl";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import { IoCaretDownOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import LessonControlButtons from "./LessonControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { setAssignments } from "./reducer";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsforCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const onDeleteAssignment = async (aid: string) => {
    await client.deleteAssignment(cid as string, aid as string);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== aid)));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <div className="pb-2 d-flex gap-5 align-items-center">
        <InputGroup className="align-items-center gap-2 ps-3 border border-1 rounded ">
          <SlMagnifier className="fs-5 text-muted flex-no-shrink " />
          <FormControl
            placeholder="Search..."
            size="lg"
            id="wd-search-assignment"
            className="border-0 ps-1"
          />
        </InputGroup>
        <div className="d-flex gap-3 text-nowrap">
          {isFaculty && (
            <>
              <Button
                variant="secondary"
                size="lg"
                id="wd-add-assignment-group"
              >
                <div className="d-flex gap-1 align-items-center">
                  <FaPlus className="fs-6" />
                  Group
                </div>
              </Button>
              <Button
                className="btn btn-danger"
                size="lg"
                id="wd-add-assignment"
                onClick={() =>
                  router.push(`/courses/${cid}/assignments/${uuidv4()}`)
                }
              >
                <div className="d-flex gap-1 align-items-center">
                  <FaPlus className="fs-6" />
                  Assignment
                </div>
              </Button>
            </>
          )}
        </div>
      </div>
      <ListGroup className="rounded-0 py-5 " id="wd-assignments">
        <ListGroupItem className="wd-assignment-title p-0 mb-5 fs-5 ">
          <div className="wd-title p-3 ps-3 bg-secondary border border-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoCaretDownOutline className="me-2 fs-5" />
            ASSIGNMENTS
          </div>
          {assignments && (
            <ListGroup className="wd-assignments rounded-0">
              {assignments.map((assignment: any) => (
                <ListGroupItem
                  className="wd-assignment d-flex flex-row align-items-center"
                  key={assignment._id}
                >
                  <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                  <LuClipboardPen className="me-4 fs-3 text-success flex-shrink-0" />
                  <div className="d-flex flex-column">
                    <Link
                      className="text-dark"
                      href={
                        isFaculty
                          ? `/courses/${cid}/assignments/${assignment._id}`
                          : ""
                      }
                    >
                      {assignment.title}
                    </Link>
                    {(() => {
                      const dueDate = new Date(assignment.due);
                      // Formatters for "May 27" and "11:59 PM"
                      const dateStr = dueDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                      const timeStr = dueDate.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      });

                      return (
                        <span className="fs-6">
                          <span className="text-danger">Multiple Modules</span>{" "}
                          | <strong>Due</strong> {dateStr} at {timeStr} |{" "}
                          {assignment.points} pts
                        </span>
                      );
                    })()}
                  </div>
                  <LessonControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={() => onDeleteAssignment(assignment._id)}
                  />
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
