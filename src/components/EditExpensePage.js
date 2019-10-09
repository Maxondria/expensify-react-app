import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../redux/actions/expenses";

export class EditExpensePage extends React.Component {
  id = this.props.match.params.id;

  onSubmit = ({ note, description, amount, date: createdAt }) => {
    this.props.editExpense(this.id, {
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
          <p>Expense Not Found</p>
        ) : (
          <>
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemoveExpense}>Remove</button>
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
  editExpense,
  startRemoveExpense
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
