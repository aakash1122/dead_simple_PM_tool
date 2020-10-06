import { createSlice } from "@reduxjs/toolkit";
import { v5 } from "uuid";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    addModal: false,
    projects: [
      {
        id: "123",
        name: "Todo Project",
        wip: [
          "add todo create functionality",
          "add styling to done todos",
          "last on to do",
        ],
        completed: ["add navbar"],
      },
    ],
    activeProjectId: "123",
    showAddTask: false,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: "Dfasfd",
        name: action.payload,
        wip: [],
        coompleted: [],
      });
    },
    addTask: (state, { payload }) => {
      state.projects.forEach((project) => {
        if (project.id === state.activeProjectId) {
          project.wip.push(payload);
        }
      });
    },
    toggleShowAddTask: (state) => {
      state.showAddTask = !state.showAddTask;
    },
    toggleModal: (state) => {
      state.addModal = !state.addModal;
    },
    closeModal: (state) => {
      state.addModal = false;
    },
    activateProject: (state, action) => {
      state.activeProjectId = action.payload;
    },
  },
});

export const {
  addProject,
  addTask,
  toggleModal,
  toggleShowAddTask,
  closeModal,
  activateProject,
} = projectSlice.actions;

export const selectProjects = (state) => state.project.projects;
export const selectModal = (state) => state.project.addModal;
export const selectShowAddTask = (state) => state.project.showAddTask;
export const selectActiveProject = (state) =>
  state.project.projects.find((p) => p.id === state.project.activeProjectId);

export default projectSlice.reducer;
