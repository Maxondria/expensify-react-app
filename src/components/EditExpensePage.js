import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {
  startEditExpense,
  startRemoveExpense
} from "../redux/actions/expenses";

export class EditExpensePage extends React.Component {
  id = this.props.match.params.id;

  onSubmit = ({ note, description, amount, date: createdAt }) => {
    this.props.startEditExpense(this.id, {
      note,
      description,
      amount,
      createdAt
    });
    this.props.history.push("/");
  };

  onRemoveExpense = () =>
    this.props.startRemoveExpense(this.id) && this.props.history.push("/");

  render() {
    return (
      <div>
        {this.props.expense.length === 0 ? (
          <p className="form__error">Expense Not Found</p>
        ) : (
          <>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
              </div>
            </div>
            <div className="content-container">
              <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
              />
              <button
                className="button button--secondary"
                onClick={this.onRemoveExpense}
              >
                Remove Expense
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = {
  startEditExpense,
  startRemoveExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
