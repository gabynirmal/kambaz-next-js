"use client";
import { useState } from "react";

import {
  FormControl,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { RootState } from "../store";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer,
  );
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
    description: "New Description",
  });
  const [isEnrollmentsActive, setIsEnrollmentsActive] = useState(false);
  const visibleCourses = isFaculty
    ? courses
    : isEnrollmentsActive
      ? courses
      : courses.filter((course) =>
          enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser?._id &&
              enrollment.course === course._id,
          ),
        );

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {!isFaculty && (
          <Button
            variant="primary"
            onClick={() => setIsEnrollmentsActive(!isEnrollmentsActive)}
          >
            Enrollments
          </Button>
        )}
      </div>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              {" "}
              Add{" "}
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update{" "}
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses (
        {isEnrollmentsActive
          ? courses.length
          : courses.filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser?._id &&
                  enrollment.course === course._id,
              ),
            ).length}
        )
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((course) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "350px" }}
              key={course._id}
            >
              <Card
                className="border border-0"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, .3)" }}
              >
                <Link
                  href={`/courses/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={`images/${course.image}`}
                    width="100%"
                    height={200}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-truncate">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "50px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    {isFaculty && (
                      <>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}

                    {isEnrollmentsActive &&
                      (() => {
                        const isEnrolled = enrollments.some(
                          (enrollment) =>
                            enrollment.user === currentUser?._id &&
                            enrollment.course === course._id,
                        );
                        return isEnrolled ? (
                          <Button
                            id="wd-unenroll-course-click"
                            className="btn btn-danger me-2 float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                deleteEnrollment({
                                  user: currentUser?._id,
                                  course: course._id,
                                }),
                              );
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            id="wd-enroll-course-click"
                            className="btn btn-success me-2 float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                addEnrollment({
                                  user: currentUser?._id,
                                  course: course._id,
                                }),
                              );
                            }}
                          >
                            Enroll
                          </Button>
                        );
                      })()}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
