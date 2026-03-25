"use client";
import { useParams } from "next/navigation";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

import { BsGripVertical } from "react-icons/bs";
import { IoCaretDownOutline } from "react-icons/io5";

import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as client from "../../client";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer as { currentUser: any },
  );
  const isFaculty = currentUser?.role === "FACULTY";
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module_ = await client.createModuleForCourse(
      cid as string,
      newModule,
    );
    dispatch(setModules([...modules, module_]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m,
    );
    dispatch(setModules(newModules));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  return (
    <div>
      {isFaculty && (
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={onCreateModuleForCourse}
        />
      )}
      <ListGroup className="rounded-0 py-5" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem
            className="wd-module p-0 mb-5 fs-5 border-gray"
            key={module._id}
          >
            <div className="wd-title p-3 ps-3 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoCaretDownOutline className="me-2 fs-5" />
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem className="wd-lesson p-3" key={lesson._id}>
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
