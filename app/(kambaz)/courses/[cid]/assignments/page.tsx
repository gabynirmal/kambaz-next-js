import Link from "next/link";
import {
  FormControl,
  InputGroup,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import { SlMagnifier } from "react-icons/sl";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import { IoCaretDownOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../modules/LessonControlButtons";

export default function Assignments() {
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
          <Button variant="secondary" size="lg" id="wd-add-assignment-group">
            <div className="d-flex gap-1 align-items-center">
              <FaPlus className="fs-6" />
              Group
            </div>
          </Button>
          <Button className="btn btn-danger" size="lg" id="wd-add-assignment">
            <div className="d-flex gap-1 align-items-center">
              <FaPlus className="fs-6" />
              Assignment
            </div>
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0 py-5 " id="wd-assignments">
        <ListGroupItem className="wd-assignment-title p-0 mb-5 fs-5 ">
          <div className="wd-title p-3 ps-3 bg-secondary border border-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoCaretDownOutline className="me-2 fs-5" />
            ASSIGNMENTS
          </div>
          <ListGroup className="wd-assignments rounded-0">
            <ListGroupItem className="wd-assignment d-flex flex-row align-items-center">
              <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
              <LuClipboardPen className="me-4 fs-3 text-success flex-shrink-0" />
              <div className="d-flex flex-column">
                <Link className="text-dark" href="/courses/1111/assignments/1">
                  A1
                </Link>
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 6 at 12:00am |{" "}
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment d-flex flex-row align-items-center">
              <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
              <LuClipboardPen className="me-4 fs-3 text-success flex-shrink-0" />
              <div className="d-flex flex-column">
                A2
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 13 at 12:00am |{" "}
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-assignment d-flex flex-row align-items-center">
              <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
              <LuClipboardPen className="me-4 fs-3 text-success flex-shrink-0" />
              <div className="d-flex flex-column">
                A3
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 20 at 12:00am |{" "}
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
