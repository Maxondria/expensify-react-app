import React from "react";
import AppRouter from "../router/AppRouter";
import Header from "./Header";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Header />
    <AppRouter />
  </Router>
);

export default App;
