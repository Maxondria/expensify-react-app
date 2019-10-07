import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import expensesTotalSelector from "../redux/selectors/expense-total";
import expensesSelector from "../redux/selectors/expenses";

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedTotal = numeral(expensesTotal).format("$0,0.00");

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling {formattedTotal}
      </h1>
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
