import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import expensesTotalSelector from "../redux/selectors/expense-total";
import expensesSelector from "../redux/selectors/expenses";
import { Link } from "react-router-dom";

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedTotal = numeral(expensesTotal).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span className="">{expenseCount}</span> {expenseWord}{" "}
          totaling <span>{formattedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = expensesSelector(expenses, filters);
  return {
    expensesTotal: expensesTotalSelector(visibleExpenses),
    expenseCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
