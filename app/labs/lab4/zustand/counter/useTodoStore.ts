import { create } from "zustand";

// Define the counter state
interface TodosState {
  todo: any;
  todos: any[];
  setTodo: (todo: any) => void;
  deleteTodo: (id: string) => void;
  addTodo: (todo: any) => void;
  updateTodo: (todo: any) => void;
}

// Use create function to create a hook giving us access to the state
export const useTodosStore = create<TodosState>((set) => ({
  // ✅ Plain values, no useState
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { id: "-1", title: "Learn Mongo" },

  // ✅ Use set() to update state, no setTodos/setTodo
  setTodo: (todo) => set({ todo }),

  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, id: new Date().getTime().toString() }],
      todo: { id: "-1", title: "" },
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),

  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((item) => (item.id === todo.id ? todo : item)),
      todo: { id: "-1", title: "" },
    })),
}));
