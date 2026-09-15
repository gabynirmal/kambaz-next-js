"use client";

import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useTodosStore } from "./counter/useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, addTodo, deleteTodo, setTodo, updateTodo } =
    useTodosStore((state) => state);

  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <Button onClick={() => addTodo(todo)} id="wd-add-todo-click">
            {" "}
            Add{" "}
          </Button>
          <Button onClick={() => updateTodo(todo)} id="wd-update-todo-click">
            {" "}
            Update{" "}
          </Button>
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </ListGroupItem>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <Button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
            >
              {" "}
              Delete{" "}
            </Button>
            <Button onClick={() => setTodo(todo)} id="wd-set-todo-click">
              {" "}
              Edit{" "}
            </Button>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
