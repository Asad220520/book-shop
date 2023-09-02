import { createStore } from "redux";
import { Reducer } from "./reducer";

export const store = createStore(Reducer);

// const storedState = localStorage.getItem("reduxState");
// const initialStateFromStorage = storedState ? JSON.parse(storedState) : {};

// export const store = createStore(Reducer, initialStateFromStorage);
// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem("reduxState", JSON.stringify(state));
// });
