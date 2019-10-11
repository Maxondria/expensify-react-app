import React from "react";
import LoadingPage from "../../components/LoadingPage";
import { shallow } from "enzyme";

it("should render the loading page correctly", function() {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
