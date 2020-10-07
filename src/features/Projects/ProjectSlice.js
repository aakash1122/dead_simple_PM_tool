import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    addModal: false,
    projects: [
      {
        id: "123",
        name: "Todo Project",
        wip: [
          {
            task: "add todo create functionality",
            id: "2134",
            doing: true,
          },
          {
            task: "add styling to done todos",
            id: "2132",
            doing: false,
          },
        ],
        completed: [{ task: "add navbar", id: "84" }],
      },
      {
        id: "1232",
        name: "Todo Project 2",
        wip: [],
        // completed: [{ task: "add navbar", id: "84" }],
      },
    ],
    activeProjectId: "123",
    showAddTask: false,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: nanoid(),
        name: action.payload,
        wip: [],
        coompleted: [],
      });
    },
    addTask: (state, { payload }) => {
      state.projects.forEach((project) => {
        if (project.id === state.activeProjectId) {
          project.wip.push({ task: payload, id: nanoid() });
        }
      });
    },
    doingTask: (state) => {},
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
