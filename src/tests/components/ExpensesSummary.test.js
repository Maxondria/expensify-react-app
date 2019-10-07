import React from "react";
import { ExpenseSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";

const singleExpense = { expenseCount: 1, expensesTotal: 90 };
const multipleExpenses = { expenseCount: 10, expensesTotal: 900 };

it("should render ExpensesSummary correctly when a single expense is provided", function() {
  const wrapper = shallow(<ExpenseSummary {...singleExpense} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("h1").text()).toBe("Viewing 1 expense totaling $90.00");
});

it("should render ExpensesSummary correctly when a single expense is provided", function() {
  const wrapper = shallow(<ExpenseSummary {...multipleExpenses} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("h1").text()).toBe(
    "Viewing 10 expenses totaling $900.00"
  );
});
