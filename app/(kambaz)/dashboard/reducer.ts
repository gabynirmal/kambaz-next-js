import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = { ...enrollment, _id: uuidv4() };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (a: any) =>
          !(a.user === enrollment.user && a.course == enrollment.course),
      );
    },
  },
});
export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
