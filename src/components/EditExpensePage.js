import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../redux/actions/expenses";
import { Redirect } from "react-router-dom";

const EditExpensePage = props => {
  const id = props.match.params.id;
  return (
    <div>
      {!props.expense && <Redirect to="/" />}

      <ExpenseForm
        expense={props.expense}
        onSubmit={({ note, description, amount, date: createdAt }) => {
          props.editExpense(id, {
            note,
            description,
            amount,
            createdAt
          });
          props.history.push("/");
        }}
      />
      <button
        onClick={() => props.removeExpense(id) && props.history.push("/")}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = {
  editExpense,
  removeExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
