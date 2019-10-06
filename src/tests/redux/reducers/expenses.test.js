import expensesReducer from "../../../redux/reducers/expensesReducer";
import initialState from "../../../redux/store/initialState";
import actionTypes from "../../../redux/constants";

const expense = {
  id: "exp-ense-id",
  description: "description",
  note: "note",
  amount: 45,
  createdAt: 0
};

it("should setup default filter values", function() {
  const defaultState = expensesReducer(undefined, {
    type: "@@INIT"
  });

  expect(defaultState).toEqual(initialState.expenses);
});

it("should handle ADD_EXPENSE action", function() {
  const state = expensesReducer(undefined, {
    type: actionTypes.ADD_EXPENSE,
    expense
  });

  expect(state).toEqual([expense]);
});

it("should handle REMOVE_EXPENSE action", function() {
  const state = expensesReducer([expense], {
    type: actionTypes.REMOVE_EXPENSE,
    id: "exp-ense-id"
  });

  expect(state).toEqual([]);
});

it("should handle EDIT_EXPENSE action", function() {
  const state = expensesReducer([expense], {
    type: actionTypes.EDIT_EXPENSE,
    payload: {
      id: "exp-ense-id",
      expense: {
        ...expense,
        description: "description-edited"
      }
    }
  });

  expect(state).toEqual([{ ...expense, description: "description-edited" }]);
});
