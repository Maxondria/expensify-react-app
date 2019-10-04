import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>This is my Expenses List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem {...expense} />
    ))}
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expenses,
  filters
});

export default connect(mapStateToProps)(ExpenseList);
