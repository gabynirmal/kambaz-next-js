"use client";

import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { useState } from "react";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [isCourseNavOpen, setIsCourseNavOpen] = useState(true);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setIsCourseNavOpen(!isCourseNavOpen)}
        />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block pe-2">
          {isCourseNavOpen && <CourseNavigation />}
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
