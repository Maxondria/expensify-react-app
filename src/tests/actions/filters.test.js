import {
  sortByDate,
  setEndDate,
  setStartDate,
  sortByAmount,
  setTextFilter
} from "../../redux/actions/filters";

import actionTypes from "../../redux/constants";
import moment from "moment";

it("should generate set startDate action object", function() {
  const action = setStartDate(moment(0));

  expect(action).toMatchObject({
    type: actionTypes.SET_START_DATE,
    startDate: moment(0)
  });
});

it("should generate set endDate action object", function() {
  const action = setEndDate(moment(0));

  expect(action).toMatchObject({
    type: actionTypes.SET_END_DATE,
    endDate: moment(0)
  });
});

it("should set text filter", function() {
  const noText = setTextFilter();
  const withTextValue = setTextFilter("Text");

  expect(noText).toMatchObject({
    type: actionTypes.SET_TEXT_FILTER,
    text: ""
  });

  expect(withTextValue).toMatchObject({
    type: actionTypes.SET_TEXT_FILTER,
    text: "Text"
  });
});

it("should set SortByAmount Action", function() {
  const byAmount = sortByAmount();

  expect(byAmount).toEqual({ type: actionTypes.SORT_BY_AMOUNT });
});

it("should set sortByDate Action", function() {
  const byDate = sortByDate();

  expect(byDate).toEqual({ type: actionTypes.SORT_BY_DATE });
});
