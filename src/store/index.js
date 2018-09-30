import { combineReducers, createStore } from "redux";

import { authReducer } from "./reducers/auth";

const allReducers = combineReducers({ authReducer });

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// setTimeout(() => {
//   store.dispatch({ payload: { isAuth: true }, type: "AUTH" });
// }, 2000);
