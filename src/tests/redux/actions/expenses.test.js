import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense
} from "../../../redux/actions/expenses";
import actionTypes from "../../../redux/constants";
import expenses from "../fixtures/expenses.fixture";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../../firebase/firebase";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(async () => {
  const expensesData = {};

  expenses.forEach(({ id, description, amount, createdAt, note }) => {
    expensesData[id] = { description, amount, createdAt, note };
  });

  await database.ref("expenses").set(expensesData);
});

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
  const addExpenseAction = addExpense(expenses[0]);

  expect(addExpenseAction).toMatchObject({
    type: actionTypes.ADD_EXPENSE,
    expense: expenses[0]
  });
});

it("should return setExpenses Action", function() {
  const addExpenseAction = setExpenses(expenses);

  expect(addExpenseAction).toMatchObject({
    type: actionTypes.SET_EXPENSES,
    expenses
  });
});

it("should asynchronously handle saving data to firebase and store", function(done) {
  const initialState = {};
  const store = mockStore(initialState);
  const expenseData = {
    note: expenses[0].note,
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toMatchObject({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toMatchObject(expenseData);
      done();
    });
});

it("should add expense with defaults to firebase and store", function(done) {
  const initialState = {};
  const store = mockStore(initialState);

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toMatchObject({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          description: "",
          note: "",
          amount: 0,
          createdAt: 0
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toMatchObject({
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
      });
      done();
    });
});

it("should fetch all expenses from firebase and update store", function(done) {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toBe(actionTypes.SET_EXPENSES);

    done();
  });
});

it("should remove expense from firebase before removing it from store", function(done) {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(startRemoveExpense(expenses[0].id)).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toBe(actionTypes.REMOVE_EXPENSE);
    done();
  });
});
