import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/Reducers/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
