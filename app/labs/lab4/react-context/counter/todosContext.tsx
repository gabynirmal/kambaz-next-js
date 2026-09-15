"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context state
interface TodosContextState {
  todo: any;
  todos: any[];
  setTodo: (todo: any) => void;
  deleteTodo: (id: string) => void;
  addTodo: (todo: any) => void;
  updateTodo: (todo: any) => void;
}

// Create the context
const TodosContext = createContext<TodosContextState | undefined>(undefined);

// Create the provider component
export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

  const addTodo = (todo: any) => {
    const newTodos = [
      ...todos,
      { ...todo, id: new Date().getTime().toString() },
    ];
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({ id: "-1", title: "" });
  };

  const value: TodosContextState = {
    todo,
    todos,
    deleteTodo,
    addTodo,
    updateTodo,
    setTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

// Create a custom hook to use the counter context
export const useCounter = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useCounter must be used within a TodosProvider");
  }
  return context; // ✅ TypeScript now knows this is always TodosContextState
};
