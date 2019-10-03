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
        if (expense.id === action.id) {
          return { ...state, ...action.expense };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
