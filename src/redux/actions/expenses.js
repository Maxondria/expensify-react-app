import actionTypes from "../constants";
import database from "../../firebase/firebase";

const addExpense = expense => ({
  type: actionTypes.ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      date: createdAt = 0
    } = expenseData;

    const expense = { description, amount, note, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

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

const setExpenses = expenses => ({
  type: actionTypes.SET_EXPENSES,
  expenses
});

export { addExpense, setExpenses, removeExpense, editExpense };
