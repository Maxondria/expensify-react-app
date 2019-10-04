import actionTypes from "../constants";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: actionTypes.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (id) => ({
  type: actionTypes.REMOVE_EXPENSE,
  id
});

const editExpense = (id, expense) => ({
  type: actionTypes.EDIT_EXPENSE,
  expense
});

export { addExpense, removeExpense, editExpense };
