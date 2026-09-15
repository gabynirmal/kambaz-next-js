import { create } from "zustand";

// Define the counter state
interface CounterState {
  count: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
  setCount: (count: number) => void;
  reset: () => void;
}

// Use create function to create a hook giving us access to the state
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
  setCount: (count) => set({ count }),
  reset: () => set({ count: 0 }),
}));
