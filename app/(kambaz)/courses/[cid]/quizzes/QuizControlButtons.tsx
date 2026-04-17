import { IoEllipsisVertical } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Dropdown } from "react-bootstrap";
import { MdOutlinePreview, MdOutlinePublish } from "react-icons/md";
import { MdOutlineUnpublished } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";

export default function QuizControlButtons({
  assignment,
  deleteAssignment,
  updateAssignment,
}: {
  assignment: any;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: any) => void;
}) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const router = useRouter();
  const { cid } = useParams();

  return (
    <div className="float-end d-flex flex-row ms-auto ps-3 align-items-center">
      {isFaculty ? (
        <>
          {assignment?.isPublished && <GreenCheckmark />}
          <Dropdown>
            <Dropdown.Toggle
              as="span"
              style={{ cursor: "pointer" }}
              bsPrefix="no-caret"
            >
              <IoEllipsisVertical className="fs-4" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {isFaculty && (
                <>
                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => deleteAssignment(assignment?._id)}
                  >
                    <FaTrash className="me-2" />
                    <span className="text-black">Delete Quiz</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-black"
                    onClick={() =>
                      updateAssignment({
                        ...assignment,
                        isPublished: !assignment?.isPublished,
                      })
                    }
                  >
                    {assignment?.isPublished ? (
                      <>
                        <MdOutlineUnpublished className="me-2" />
                        <span className="text-black">Unpublish Quiz</span>
                      </>
                    ) : (
                      <>
                        <MdOutlinePublish className="me-2" />
                        <span className="text-black">Publish Quiz</span>
                      </>
                    )}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-primary"
                    onClick={() =>
                      router.push(`/courses/${cid}/quizzes/${assignment._id}`)
                    }
                  >
                    <FaPencil className="me-2" />
                    <span className="text-black">Edit Quiz</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-black"
                    onClick={() =>
                      router.push(
                        `/courses/${cid}/quizzes/${assignment._id}/preview`,
                      )
                    }
                  >
                    <MdOutlinePreview className="me-2" />
                    <span className="text-black">Preview Quiz</span>
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <IoEllipsisVertical className="fs-4" />
      )}
    </div>
  );
}
