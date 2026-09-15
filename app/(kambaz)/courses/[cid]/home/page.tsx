"use client";

import Modules from "../modules/page";
import CourseStatus from "./Status";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
export default function Home() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-5">
          <Modules />
        </div>
        <div className="d-none d-lg-block">{isFaculty && <CourseStatus />}</div>
      </div>
    </div>
  );
}
