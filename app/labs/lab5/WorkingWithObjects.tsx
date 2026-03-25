"use client";

import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
import { FormControl } from "react-bootstrap";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "21",
    name: "Gabriela Nirmal",
    description: "Registered Baddie",
    course: "How to Eat the House DOWN 101",
  });
  const [isChecked, setIsChecked] = useState(false);
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title{" "}
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={ASSIGNMENT_API_URL}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name{" "}
      </a>
      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

      <h4>Retrieving Objects Module</h4>
      <a
        id="wd-retrieve-modules"
        className="btn btn-primary"
        href={MODULE_API_URL}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties Module</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Name
      </a>
      <hr />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <hr />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed{" "}
      </a>
      <label className="me-2">
        <input
          type="radio"
          name="completed"
          value="true"
          checked={assignment.completed === true}
          onChange={() => setAssignment({ ...assignment, completed: true })}
        />{" "}
        True
      </label>
      <label>
        <input
          type="radio"
          name="completed"
          value="false"
          checked={assignment.completed === false}
          onChange={() => setAssignment({ ...assignment, completed: false })}
        />{" "}
        False
      </label>
      <hr />
      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <FormControl
        className="w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
}
