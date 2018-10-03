import { combineReducers, createStore } from "redux";

import { authReducer } from "./reducers/auth";

import { scrumTableReducer } from "./reducers/table-render";

const allReducers = combineReducers({ authReducer, scrumTableReducer });

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.store = store;
