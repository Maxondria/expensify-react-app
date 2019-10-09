import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./redux/store/configureStore";
import { startSetExpenses } from "./redux/actions/expenses";

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>,

    document.getElementById("root")
  );
});
