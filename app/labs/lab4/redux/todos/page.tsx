"use client";

import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "../../store";

export default function Todos() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todos</h1>
        <TodoList />
      </div>
    </Provider>
  );
}
