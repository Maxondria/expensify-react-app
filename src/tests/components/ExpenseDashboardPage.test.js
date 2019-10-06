import { shallow } from "enzyme";
import React from "react";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

it("should render Header correctly", function() {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
