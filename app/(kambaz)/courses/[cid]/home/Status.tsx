import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </Button>{" "}
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </Button>{" "}
        </div>
      </div>
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiTargetLock className="me-2 fs-5" /> Choose Home Page
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <VscGraph className="me-2 fs-5" /> View Course Stream
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoMegaphoneOutline className="me-2 fs-5" /> New Announcement
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <VscGraph className="me-2 fs-5" /> New Analytics
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <CiBellOn className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}
