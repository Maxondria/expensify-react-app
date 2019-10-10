import { firebase, GoogleAuthProvider } from "../../firebase/firebase";
import actionTypes from "../constants";

export const login = uid => ({
  type: actionTypes.LOGIN,
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(GoogleAuthProvider);
  };
};

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
