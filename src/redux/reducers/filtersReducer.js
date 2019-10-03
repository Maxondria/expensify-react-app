import actionTypes from "../constants";
import initialState from "../store/initialState";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT_FILTER:
      return { ...state, text: action.text };
    case actionTypes.SORT_BY_AMOUNT:
      return { ...state, sortBy: "amount" };
    case actionTypes.SORT_BY_DATE:
      return { ...state, sortBy: "date" };
    case actionTypes.SET_START_DATE:
      return { ...state, startDate: action.startDate };
    case actionTypes.SET_END_DATE:
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filtersReducer;
