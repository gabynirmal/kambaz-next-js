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
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Form id="wd-assignments-editor" className="d-flex flex-column gap-4 pt-2">
      {/* Assignment Name */}
      <div>
        <FormLabel htmlFor="wd-assignment-name">Assignment Name</FormLabel>
        <FormControl
          id="wd-assignment-name"
          type="text"
          defaultValue="A1 - ENV + HTML"
        ></FormControl>
      </div>

      {/* Assignment Description */}
      <FormControl
        as="textarea"
        id="assignment-description"
        style={{ height: 200 }}
        defaultValue="The assignment is available online Submit a link to the landing page of your web application"
      ></FormControl>

      <div className="d-flex flex-column gap-4 align-items-end">
        {/* Points */}
        <div className="d-flex gap-2 align-items-center">
          <FormLabel htmlFor="wd-assignment-points">Points</FormLabel>
          <FormControl
            id="wd-assignment-points"
            type="number"
            defaultValue="100"
            style={{ width: 1000 }}
          ></FormControl>
        </div>

        {/* Assignment Group */}

        <div className="d-flex gap-2 align-items-center ">
          <FormLabel htmlFor="wd-assignment-group" className="text-nowrap">
            Assignment Group
          </FormLabel>
          <Dropdown
            id="wd-assignment-group"
            className="rounded border-1 border border-gray"
            style={{ width: 1000 }}
          >
            <DropdownToggle className="text-black d-flex align-items-center justify-content-between w-100">
              ASSIGNMENTS
            </DropdownToggle>
            <DropdownMenu className="w-100">
              <DropdownItem>ASSIGNMENTS</DropdownItem>
              <DropdownItem>QUIZZES</DropdownItem>
              <DropdownItem>EXAMS</DropdownItem>
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

        {/* Submission Type */}
        <div className="d-flex gap-2">
          <FormLabel
            htmlFor="wd-assignment-submission-type"
            className="text-nowrap"
          >
            Submission Type
          </FormLabel>
          <div
            className="d-flex flex-column gap-4 border border-1 rounded p-4"
            style={{ width: 1000 }}
          >
            <Dropdown
              id="wd-assignment-display-grade"
              className="rounded border-1 border border-gray w-100 "
            >
              <DropdownToggle className="text-black d-flex align-items-center justify-content-between w-100">
                Online
              </DropdownToggle>
              <DropdownMenu className="w-100">
                <DropdownItem>Online</DropdownItem>
                <DropdownItem>On Paper</DropdownItem>
                <DropdownItem>External Tool</DropdownItem>
                <DropdownItem>No Submission</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div>
              <span className="fs-5">Online Entry Options</span>
              <FormCheck id="text-entry" type="checkbox" label="Text Entry" />
              <FormCheck id="web-url" type="checkbox" label="Website URL" />
              <FormCheck
                id="media-recordings"
                type="checkbox"
                label="Media Recordings"
              />
              <FormCheck
                id="student-annotations"
                type="checkbox"
                label="Student Annotation"
              />
              <FormCheck
                id="file-uploads"
                type="checkbox"
                label="File Uploads"
              />
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
            <FormControl
              id="wd-assignment-assign-to"
              type="text"
              defaultValue="Everyone"
            />
            <FormLabel
              htmlFor="wd-assignment-due-date"
              className="text-nowrap pt-2"
            >
              <span className="fs-5">Due</span>
            </FormLabel>
            <FormControl
              id="wd-assignment-due-date"
              type="datetime-local"
              defaultValue="2024-05-13T23:59"
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
                  defaultValue="2024-05-13T00:01"
                />
              </Col>
              <Col>
                <FormControl
                  id="wd-assignment-available-until-date"
                  type="datetime-local"
                  defaultValue="2024-05-13T23:59"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Form>
  );
}
