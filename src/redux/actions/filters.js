import actionTypes from "../constants";

export const setTextFilter = (text = "") => ({
  type: actionTypes.SET_TEXT_FILTER,
  text
});

export const sortByDate = () => ({
  type: actionTypes.SORT_BY_DATE
});

export const sortByAmount = () => ({
  type: actionTypes.SORT_BY_AMOUNT
});

export const setStartDate = startDate => ({
  type: actionTypes.SET_START_DATE,
  startDate
});

export const setEndDate = endDate => ({
  type: actionTypes.SET_END_DATE,
  endDate
});
