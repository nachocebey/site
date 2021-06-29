import { PLUS_ONE } from "./index";

const initialState = {
  counter: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case PLUS_ONE: {
      return {
        counter: state.counter + 1,
      };
    }
    default:
      return state;
  }
}
