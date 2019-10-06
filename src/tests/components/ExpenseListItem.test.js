import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../redux/fixtures/expenses.fixture";

it("should render one expense item correctly", function() {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});
