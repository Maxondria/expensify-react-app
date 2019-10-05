import {
  addExpense,
  editExpense,
  removeExpense
} from "../../redux/actions/expenses";
import actionTypes from "../../redux/constants";

it("should return Remove Expense Action", function() {
  const id = "abd-efg-hij-klm";

  const removeExpenseAction = removeExpense(id);
  expect(removeExpenseAction).toMatchObject({
    type: actionTypes.REMOVE_EXPENSE,
    id
  });
});

it("should return Edit Expense Action", function() {
  const expense = { description: "description" };
  const id = "abd-efg-hij-klm";

  const editExpenseAction = editExpense(id, expense);

  expect(editExpenseAction).toMatchObject({
    type: actionTypes.EDIT_EXPENSE,
    payload: {
      expense,
      id
    }
  });
});

it("should return Add Expense Action", function() {
  const newExpense = {
    description: "description",
    note: "note",
    amount: 45,
    date: 0
  };

  const addExpenseAction = addExpense(newExpense);

  expect(addExpenseAction.type).toEqual(actionTypes.ADD_EXPENSE);
  expect(addExpenseAction.expense.description).toEqual(newExpense.description);
});
