import { firebase, GoogleAuthProvider } from "../../firebase/firebase";

export const startLogin = () => {
  return dispatch => {
    return firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log("TOKEN ", token);
        console.log("USER ", user);
      });
  };
};

export const startLogout = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};
