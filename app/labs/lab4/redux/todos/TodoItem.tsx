import { ListGroupItem, Button } from "react-bootstrap";

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        {" "}
        Delete{" "}
      </Button>
      <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}
