import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Redux/Reducers/index";

const store = configureStore({ reducer: reducer })