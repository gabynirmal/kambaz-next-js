"use client";
import { useState, useEffect } from "react";

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
import * as client from "../courses/client";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";

  const dispatch = useDispatch();
  const [allCourses, setAllCourses] = useState<any[]>([]);
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

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(courses.map((c) => (c._id === course._id ? course : c))),
    );
  };
  const onEnrollUserInCourse = async (userId: string, courseId: string) => {
    await client.enrollUserInCourse(userId, courseId);
    dispatch(addEnrollment({ user: userId, course: courseId }));
    await fetchCourses();
  };
  const onUnenrollUserInCourse = async (userId: string, courseId: string) => {
    await client.unenrollUserInCourse(userId, courseId);
    dispatch(deleteEnrollment({ user: userId, course: courseId }));
    await fetchCourses();
  };

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      const all = await client.fetchAllCourses();
      dispatch(setCourses(myCourses));
      setAllCourses(all);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const displayedCourses = isEnrollmentsActive ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {!isFaculty && currentUser && (
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
              onClick={onAddNewCourse}
            >
              Add
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
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
      {currentUser && (
        <>
          <h2 id="wd-dashboard-published">
            Published Courses ({displayedCourses.length})
          </h2>
          <hr />
          <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
              {displayedCourses.map((course) => (
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
                                onDeleteCourse(course._id);
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
                        {!isFaculty &&
                          isEnrollmentsActive &&
                          (courses.some((c) => c._id === course._id) ? (
                            <Button
                              id="wd-unenroll-course-click"
                              className="btn btn-danger me-2 float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                onUnenrollUserInCourse(
                                  currentUser._id,
                                  course._id,
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
                                onEnrollUserInCourse(
                                  currentUser._id,
                                  course._id,
                                );
                              }}
                            >
                              Enroll
                            </Button>
                          ))}
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
