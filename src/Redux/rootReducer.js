import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import {i18nState} from "redux-i18n"

const rootReducer = combineReducers({
  counter: counterReducer,
  i18nState
});

export default rootReducer;
