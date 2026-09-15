"use client";

import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="float-end">
      {isFaculty && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
          />

          <FaTrash
            className="text-danger me-3 mb-1"
            onClick={() => deleteModule(moduleId)}
          />

          <GreenCheckmark />
          <FaPlus />
        </>
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
