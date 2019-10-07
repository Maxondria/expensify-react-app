import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../redux/fixtures/expenses.fixture.js";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

it("should render ExpenseForm correctly", function() {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

it("should render ExpenseForm with props - edit", function() {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

it("should render error for invalid form submission", function() {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
  expect(wrapper.state().error).toEqual("Amount and Description Required");
  expect(wrapper).toMatchSnapshot();
});

it("should set description state property to user input on change", function() {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: {
        name: "description",
        value: "description"
      }
    });
  expect(wrapper.state().description).toEqual("description");
});

it("should reject amount user input on change if it's not a number", function() {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        name: "amount",
        value: "WILL-BE-REJECTED"
      }
    });
  expect(wrapper.state().amount).toEqual("");
});

it("should set amount state property to user input if it's a number", function() {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        name: "amount",
        value: "345.56"
      }
    });
  expect(wrapper.state().amount).toEqual("345.56");
});

it("should call onSubmit prop for valid form submission", function() {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
  expect(wrapper.state().error).toBe("");

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    date: expenses[0].createdAt
  });
});

it("should set new date on date change", function() {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop("onDateChange")(now);
  expect(wrapper.state().date).toEqual(now);
});

it("should set calendar focus on change", function() {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused });
  expect(wrapper.state().calenderFocused).toBe(focused);
});
