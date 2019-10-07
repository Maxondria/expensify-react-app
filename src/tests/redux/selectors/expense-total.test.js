import selectExpensesTotal from "../../../redux/selectors/expense-total";
import expenses from "../fixtures/expenses.fixture";

it("should return 0 if no expenses", function() {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

it("should correctly add up a single expense", function() {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

it("should correctly add up multiple expenses", function() {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(409.15);
});
