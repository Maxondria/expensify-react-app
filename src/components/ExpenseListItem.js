import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
        <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
