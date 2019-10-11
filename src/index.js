import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import App, { history } from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./redux/store/configureStore";
import { startSetExpenses } from "./redux/actions/expenses";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./redux/actions/auth";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

const appRoot = (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(appRoot, document.getElementById("root"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    store.dispatch(logout());
    history.push("/");
  }
});
