import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,

  document.getElementById("root")
);
