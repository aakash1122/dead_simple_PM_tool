import { combineReducers, createStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectReducer from "../features/Projects/ProjectSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ project: projectReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export let persistor = persistStore(store);
