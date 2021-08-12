import { createStore } from "redux";

export const store = createStore(reducer);

function reducer(
  state = {
    gender: "male",
  },
  action
) {
  switch (action.type) {
    case "ADD":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
