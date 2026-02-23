"use client";
import { useCounter } from "./context";

export default function CounterContext() {
  const { count, increment, decrement } = useCounter()!;

  return (
    <div id="wd-counter-context">
      <h2>Counter Context</h2>
      <h3>{count}</h3>
      <button onClick={increment} id="wd-counter-context-increment-click">
        Increment
      </button>
      <button onClick={decrement} id="wd-counter-context-decrement-click">
        Decrement
      </button>
      <hr />
    </div>
  );
}
