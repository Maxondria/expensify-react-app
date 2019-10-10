import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import CreateExpensePage from "../components/CreateExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
  <Switch>
    <PublicRoute path="/" component={LoginPage} exact />
    <PrivateRoute path="/create" component={CreateExpensePage} />
    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
