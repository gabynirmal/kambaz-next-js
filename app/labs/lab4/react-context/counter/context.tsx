"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context state
interface CounterContextState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the context
const CounterContext = createContext<CounterContextState | undefined>(
  undefined,
);

// Create the provider component
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const value: CounterContextState = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// Create a custom hook to use the counter context
export const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};
