import { shallow } from "enzyme";
import React from "react";
import NotFoundPage from "../../components/NotFoundPage";

it("should render Header correctly", function() {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
