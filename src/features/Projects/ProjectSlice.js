import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    addModal: false,
    activeProjectId: "123",
    showAddTask: false,
    projects: [
      {
        id: "123",
        name: "Todo Project",
        wip: [
          {
            task: "add todo create functionality",
            id: "2134",
            doing: false,
          },
          {
            task: "add styling to done todos",
            id: "2132",
            doing: false,
          },
        ],
        completed: [],
      },
    ],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: nanoid(),
        name: action.payload,
        wip: [],
        completed: [],
      });
      // set default active if not set yet
      if (!state.activeProjectId) {
        state.activeProjectId = state.projects.length
          ? state.projects[0].id
          : "";
      }
    },
    addTask: (state, { payload }) => {
      state.projects.forEach((project) => {
        if (project.id === state.activeProjectId) {
          project.wip.push({ task: payload, id: nanoid(), doing: false });
        }
      });
    },
    addToDoing: (state, { payload }) => {
      state.projects = state.projects.map((p, i) => {
        if (p.id === state.activeProjectId) {
          p.wip[payload].doing = true;
        }
        return p;
      });
    },

    addToDone: (state, { payload }) => {
      // find project id
      let { projects, activeProjectId } = state;
      let task;
      projects.map((p) => {
        if (p.id === activeProjectId) {
          task = p.wip[payload];
          // remove from wip
          p.wip = p.wip.filter((p, i) => i !== payload);
          // move to completd
          p.completed.unshift(task);
        }
        return p;
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
    updateProjectName: (state, { payload }) => {
      // update project name based on id
      let updatedProjects = state.projects.map((project) => {
        if (project.id === state.activeProjectId) {
          // if id matched then update the name
          return {
            ...project,
            name: payload,
          };
        }
        return project;
      });
      // update projects value
      state.projects = updatedProjects;
    },
    deleteProject: (state) => {
      // delete project based on active id
      let leftProjects = state.projects.filter(
        (project) => project.id !== state.activeProjectId
      );
      state.projects = leftProjects;

      // update active project id if projects has atleast one member
      if (state.projects.length >= 1) {
        state.activeProjectId = state.projects[0].id;
      } else {
        state.activeProjectId = "";
      }
    },
  },
});

export const {
  addProject,
  deleteProject,
  addTask,
  toggleModal,
  toggleShowAddTask,
  addToDoing,
  addToDone,
  closeModal,
  activateProject,
  updateProjectName,
} = projectSlice.actions;

export const selectProjects = (state) => state.project.projects;
export const selectModal = (state) => state.project.addModal;
export const selectShowAddTask = (state) => state.project.showAddTask;
export const selectActiveProject = (state) =>
  state.project.projects.find((p) => p.id === state.project.activeProjectId);

export default projectSlice.reducer;

// // console.log(JSON.stringify(state, undefined, 2));
// // find project id
// let pId;
// let task;
// state.projects.forEach((p, i) => {
//   p.wip.forEach((wip) => {
//     if (wip.id === payload) {
//       pId = i;
//     }
//   });
// });
// //
// state.projects[pId].wip = state.projects[pId].wip.map((wip) => {
//   if (wip.id === payload) {
//     // task = wip;
//     wip.doing = true;
//   }
// });
//       // remove from wip
//       // state.projects[pId].wip = state.projects[pId].wip.filter((wip) => {
//       //   return wip.id !== payload;
//       // });
//       // add to doing
