"use client";
import { CounterProvider } from "./counter/context";
import CounterContext from "./counter";
import ReactContextTodoList from "./ReactContextTodoList";

export default function ReactContextExamples() {
  return (
    <div>
      <h1>React Context Examples</h1>
      <CounterProvider>
        <CounterContext />
      </CounterProvider>
      <ReactContextTodoList />
    </div>
  );
}
