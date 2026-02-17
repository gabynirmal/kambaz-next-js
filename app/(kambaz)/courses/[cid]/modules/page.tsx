"use client";
import { useParams } from "next/navigation";
import * as db from "../../../database";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

import { BsGripVertical } from "react-icons/bs";
import { IoCaretDownOutline } from "react-icons/io5";

import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ModulesControls />
      <ListGroup className="rounded-0 py-5" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              className="wd-module p-0 mb-5 fs-5 border-gray"
              key={module._id}
            >
              <div className="wd-title p-3 ps-3 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoCaretDownOutline className="me-2 fs-5" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem className="wd-lesson p-3" key={lesson._id}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
