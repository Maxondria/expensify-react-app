import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import CreateExpensePage from "../components/CreateExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact />
    <Route path="/create" component={CreateExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
