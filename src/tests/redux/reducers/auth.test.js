import authReducer from "../../../redux/reducers/authReducer";
import actionTypes from "../../../redux/constants";
import initialState from "../../../redux/store/initialState";

const uid = "user-unique-id";

it("should setup default filter values", function() {
  const defaultState = authReducer(undefined, {
    type: "@@INIT"
  });

  expect(defaultState).toEqual(initialState.auth);
});

it("should should handle login action", function() {
  const state = authReducer({}, { type: actionTypes.LOGIN, uid });

  expect(state).toEqual({ uid });
});

it("should handle logout", function() {
  const state = authReducer({ uid }, { type: actionTypes.LOGOUT });
  expect(state).toEqual(initialState.auth);
});
