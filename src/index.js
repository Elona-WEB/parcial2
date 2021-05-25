import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IntlProvider } from "react-intl";
import localeESMessages from "./locales/es.json";
import localeENMessages from "./locales/en.json";
import SerieList from "./components/SerieList";

const lan = window.navigator.language || navigator.browserLanguage;

ReactDOM.render(
  <IntlProvider
    locale={lan}
    messages={lan === "es" ? localeESMessages : localeENMessages}
  >
    <SerieList lan={lan} />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
