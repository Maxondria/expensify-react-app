import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../redux/fixtures/filters.fixture";
import { DateRangePicker } from "react-dates";
import moment from "moment";

const props = {
  setTextFilter: jest.fn(),
  sortByDate: jest.fn(),
  sortByAmount: jest.fn(),
  setStartDate: jest.fn(),
  setEndDate: jest.fn(),
  filters
};

const wrapper = shallow(<ExpenseListFilters {...props} />);

it("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should render ExpenseListFilters with alt data correctly - update props", () => {
  const wrapper = shallow(<ExpenseListFilters {...props} />);
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

it("should handle text changes", function() {
  const wrapper = shallow(<ExpenseListFilters {...props} />);
  const value = "Changed Text";
  wrapper.find("input").simulate("change", {
    target: { value }
  });

  expect(props.setTextFilter).toHaveBeenCalledWith(value);
});

it("should handle sort By date", function() {
  const value = "date";
  const wrapper = shallow(<ExpenseListFilters {...props} />);
  wrapper.setProps({
    filters: altFilters //update filters prop to sortby amount first
  });
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(props.sortByDate).toHaveBeenCalled();
});

it("should handle sort By amount", function() {
  const value = "amount";
  const wrapper = shallow(<ExpenseListFilters {...props} />);

  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(props.sortByAmount).toHaveBeenCalled();
});

it("should handle date changes", function() {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  const wrapper = shallow(<ExpenseListFilters {...props} />);
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(props.setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(props.setEndDate).toHaveBeenLastCalledWith(endDate);
});

it("hould handle date focus changes", () => {
  const calendarFocused = "endDate";
  const wrapper = shallow(<ExpenseListFilters {...props} />);
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state().calenderFocused).toBe(calendarFocused);
});
