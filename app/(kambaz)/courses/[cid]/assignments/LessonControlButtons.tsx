import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
export default function LessonControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="float-end d-flex flex-row ms-auto ps-3">
      {isFaculty && (
        <>
          <FaTrash
            className="text-danger me-3 mb-1"
            onClick={() => deleteAssignment(assignmentId)}
          />
          <GreenCheckmark />
        </>
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
