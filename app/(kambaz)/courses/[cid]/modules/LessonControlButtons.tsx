"use client";

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function LessonControlButtons() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="float-end d-flex flex-row ms-auto ps-3">
      {isFaculty && <GreenCheckmark />}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
