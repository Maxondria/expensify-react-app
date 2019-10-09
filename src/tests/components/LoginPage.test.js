import React from "react";
import { LoginPage } from "../../components/LoginPage";
import { shallow } from "enzyme";

it("should correctly render LoginPage", function() {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

it("should start login with google when loggin button is clicked", function() {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
