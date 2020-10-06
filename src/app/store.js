import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/Projects/ProjectSlice";

export default configureStore({
  reducer: {
    project: projectReducer,
  },
});
