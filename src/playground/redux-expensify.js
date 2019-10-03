import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const actionTypes = {
  ADD_EXPENSE: "ADD_EXPENSE",
  REMOVE_EXPENSE: "REMOVE_EXPENSE"
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
    default:
      return state;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
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
