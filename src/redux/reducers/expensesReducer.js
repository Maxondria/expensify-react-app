import actionTypes from "../constants";
import initialState from "../store/initialState";

const expensesReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      return [...state, action.expense];
    case actionTypes.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id);
    case actionTypes.EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.payload.id) {
          return { ...expense, ...action.payload.expense };
        } else {
          return expense;
        }
      });
    case actionTypes.SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;
