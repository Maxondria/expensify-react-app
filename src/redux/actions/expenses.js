import actionTypes from "../constants";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  date = 0
} = {}) => ({
  type: actionTypes.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt: date
  }
});

const removeExpense = id => ({
  type: actionTypes.REMOVE_EXPENSE,
  id
});

const editExpense = (id, expense) => ({
  type: actionTypes.EDIT_EXPENSE,
  payload: {
    expense,
    id
  }
});

export { addExpense, removeExpense, editExpense };
