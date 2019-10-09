import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import expenses from "../redux/fixtures/expenses.fixture";

const props = {
  expense: {
    note: expenses[0].note,
    description: expenses[0].description,
    amount: expenses[0].amount,
    date: expenses[0].createdAt
  },
  startEditExpense: jest.fn(),
  startRemoveExpense: jest.fn(),
  match: { params: { id: 1 } },
  history: {
    push: jest.fn()
  }
};

it("should render EditExpensePage correctly", function() {
  const wrapper = shallow(<EditExpensePage {...props} />);

  expect(wrapper).toMatchSnapshot();
});

it("should exit page if no expense was found (Reloading Page with temporary store)", function() {
  const noExpenseProps = { ...props, expense: [] };
  const wrapper = shallow(<EditExpensePage {...noExpenseProps} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("p").text()).toBe("Expense Not Found");
});

it("should handle onSubmit()", function() {
  const wrapper = shallow(<EditExpensePage {...props} />);

  wrapper.find("ExpenseForm").prop("onSubmit")(props.expense);
  expect(props.startEditExpense).toHaveBeenLastCalledWith(
    props.match.params.id,
    {
      note: expenses[0].note,
      description: expenses[0].description,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt
    }
  );
  expect(props.history.push).toHaveBeenLastCalledWith("/");
});

it("should remove expense and redirect to homepage if remove button clicked", function() {
  const wrapper = shallow(<EditExpensePage {...props} />);

  wrapper.find("button").simulate("click");
  expect(props.startRemoveExpense).toHaveBeenLastCalledWith(
    props.match.params.id
  );
  expect(props.history.push).toHaveBeenLastCalledWith("/");
});
