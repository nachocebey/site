import counterSlice from "./counterSlice";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer,
} from "react-redux-i18n";

export default combineReducers({
  counterSlice,
});
