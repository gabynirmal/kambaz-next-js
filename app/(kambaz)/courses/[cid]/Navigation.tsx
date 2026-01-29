import Link from "next/link";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/courses/1111/home"
        id="wd-course-home-link"
        className="list-group-item active border-0"
      >
        Home
      </Link>
      <Link
        href="/courses/1111/modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border-0"
      >
        Modules
      </Link>
      <Link
        href="/courses/1111/piazza"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"
      >
        Piazza
      </Link>
      <Link
        href="/courses/1111/zoom"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border-0"
      >
        Zoom
      </Link>
      <Link
        href="/courses/1111/assignments"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border-0"
      >
        Assignments
      </Link>
      <Link
        href="/courses/1111/quizzes"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border-0"
      >
        Quizzes
      </Link>
      <Link
        href="/courses/1111/grades"
        id="wd-course-grades-link"
        className="list-group-item text-danger border-0"
      >
        Grades
      </Link>
      <Link
        href="/courses/1111/people/table"
        id="wd-course-people-link"
        className="list-group-item text-danger border-0"
      >
        People
      </Link>
    </div>
  );
}
