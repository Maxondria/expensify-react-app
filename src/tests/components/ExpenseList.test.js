import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../redux/fixtures/expenses.fixture";

it("should render list of expenses correctly", function() {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

it("should render expense list with 'No Expenses Found' ", function() {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
