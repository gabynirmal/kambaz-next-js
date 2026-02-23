import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/reducer";
import modulesReducer from "./courses/[cid]/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentsReducer from "./courses/[cid]/assignments/reducer";
import enrollmentsReducer from "./dashboard/reducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
