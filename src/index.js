import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import I18n from "redux-i18n";
import { Provider } from "react-redux";
import { translations } from "./assets/translations";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18n translations={translations} initialLang="en" fallbackLang="en">
        <App />
      </I18n>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
