import selectExpenses from "../../../redux/selectors/expenses";
import expenses from "./expensesTestData";
import moment from "moment";

const reusableFilters = {
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined
};

it("should filter by text value", function() {
  const filters = {
    ...reusableFilters,
    text: "Cheese"
  };
  const result = selectExpenses(expenses, filters);
  const [one, two] = expenses;

  expect(result).toEqual([two, one]);
});

it("should filter by startDate", function() {
  const filters = {
    ...reusableFilters,
    startDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);

  const [one, , three, , five] = expenses;

  expect(result).toEqual([three, five, one]);
});

it("should filter by endDate", function() {
  const filters = {
    ...reusableFilters,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);

  const [one, two, , four] = expenses;

  expect(result).toEqual([two, four, one]);
});

it("should sort by date", function() {
  const filters = {
    ...reusableFilters,
    sortBy: "date"
  };
  const result = selectExpenses(expenses, filters);
  const [one, two, three, four, five] = expenses;

  expect(result).toEqual([three, five, one, four, two]);
});

it("should sort by amount", function() {
  const filters = {
    ...reusableFilters
  };
  const result = selectExpenses(expenses, filters);
  const [one, two, three, four, five] = expenses;

  expect(result).toEqual([two, three, five, four, one]);
});
