import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const actionTypes = {
  ADD_EXPENSE: "ADD_EXPENSE",
  REMOVE_EXPENSE: "REMOVE_EXPENSE",
  EDIT_EXPENSE: "EDIT_EXPENSE",
  SET_TEXT_FILTER: "SET_TEXT_FILTER"
};

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

const removeExpense = ({ id } = {}) => ({
  type: actionTypes.REMOVE_EXPENSE,
  id
});

const editExpense = (id, expense) => ({
  type: actionTypes.EDIT_EXPENSE,
  expense
});

const setTextFilter = (text = "") => ({
  type: actionTypes.SET_TEXT_FILTER,
  text
});

const initialState = {
  expenses: [],
  filters: {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  }
};

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

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT_FILTER:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const demooStore = {
  expenses: [
    {
      id: "bnbvnxbnb",
      description: "January Rent",
      note: "This was my final payment for the address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
