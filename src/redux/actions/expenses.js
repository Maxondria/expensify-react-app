import actionTypes from "../constants";
import database from "../../firebase/firebase";

const addExpense = expense => ({
  type: actionTypes.ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      date: createdAt = 0
    } = expenseData;

    const expense = { description, amount, note, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
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

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      });
  };
};

const editExpense = (id, expense) => ({
  type: actionTypes.EDIT_EXPENSE,
  payload: {
    expense,
    id
  }
});

export const startEditExpense = (id, expense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(expense)
      .then(() => {
        dispatch(editExpense(id, expense));
      });
  };
};

const setExpenses = expenses => ({
  type: actionTypes.SET_EXPENSES,
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once("value", snapshot => {
      const expenses = [];

      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};

export { addExpense, setExpenses, removeExpense, editExpense };
