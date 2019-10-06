import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/Header";

it("should render Header correctly", function() {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").length).toBe(1);
  expect(wrapper.find("h1").text()).toBe("Expensify");
});
