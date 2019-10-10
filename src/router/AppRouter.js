import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import CreateExpensePage from "../components/CreateExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LoginPage} exact />
    <Route path="/create" component={CreateExpensePage} />
    <Route path="/dashboard" component={ExpenseDashboardPage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
