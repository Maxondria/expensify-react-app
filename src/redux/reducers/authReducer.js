import actionTypes from "../constants";
import initialState from "../store/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { uid: action.uid };
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};
