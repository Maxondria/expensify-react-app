import { shallow } from "enzyme";
import React from "react";
import NotFoundPage from "../../components/NotFoundPage";

it("should render NotFoundPage correctly", function() {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
