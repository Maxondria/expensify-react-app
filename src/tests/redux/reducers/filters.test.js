import filtersReducer from "../../../redux/reducers/filtersReducer";
import initialState from "../../../redux/store/initialState";
import actionTypes from "../../../redux/constants";
import moment from "moment";

it("should setup default filter values", function() {
  const defaultState = filtersReducer(undefined, {
    type: "@@INIT"
  });

  expect(defaultState).toEqual(initialState.filters);
});

it("should handle SET_TEXT_FILTER action", function() {
  const state = filtersReducer(undefined, {
    type: actionTypes.SET_TEXT_FILTER,
    text: "text"
  });

  expect(state).toMatchObject({
    ...initialState.filters,
    text: "text"
  });
});

it("should handle SORT_BY_AMOUNT action", function() {
  const state = filtersReducer(undefined, {
    type: actionTypes.SORT_BY_AMOUNT
  });

  expect(state).toMatchObject({
    ...initialState.filters,
    sortBy: "amount"
  });
});

it("should handle SORT_BY_DATE action", function() {
  const state = filtersReducer(undefined, {
    type: actionTypes.SORT_BY_DATE
  });

  expect(state).toMatchObject({
    ...initialState.filters,
    sortBy: "date"
  });
});

it("should handle SET_START_DATE action", function() {
  const state = filtersReducer(undefined, {
    type: actionTypes.SET_START_DATE,
    startDate: moment(0)
  });

  expect(state).toMatchObject({
    ...initialState.filters,
    startDate: moment(0)
  });
});

it("should handle SET_END_DATE action", function() {
  const state = filtersReducer(undefined, {
    type: actionTypes.SET_END_DATE,
    endDate: moment(0)
  });

  expect(state).toMatchObject({
    ...initialState.filters,
    endDate: moment(0)
  });
});
