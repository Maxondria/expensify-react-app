import React from "react";
import { shallow } from "enzyme";
import { CreateExpensePage } from "../../components/CreateExpensePage";
import expenses from "../redux/fixtures/expenses.fixture";

const props = {
  addExpense: jest.fn(),
  history: {
    push: jest.fn()
  }
};

it("should render CreateExpensePage correctly", function() {
  const wrapper = shallow(<CreateExpensePage {...props} />);

  expect(wrapper).toMatchSnapshot();
});

it("should handle onSubmit()", function() {
  const wrapper = shallow(<CreateExpensePage {...props} />);

  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(props.addExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(props.history.push).toHaveBeenLastCalledWith("/");
});
