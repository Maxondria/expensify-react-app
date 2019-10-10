import { login, logout } from "../../../redux/actions/auth";
import actionTypes from "../../../redux/constants";

it("should dispatches a login action", function() {
  const uid = "new-user-id";
  expect(login(uid)).toMatchObject({
    type: actionTypes.LOGIN,
    uid
  });
});

it("should dispatches a logout action", function() {
  expect(logout()).toMatchObject({
    type: actionTypes.LOGOUT
  });
});
