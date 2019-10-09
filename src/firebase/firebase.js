import * as firebase from "firebase";

let firebaseConfig;

if (process.env.NODE_ENV !== "test") {
  firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_APP_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
} else {
  firebaseConfig = {
    apiKey: process.env.REACT_APP_TEST_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_TEST_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_TEST_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_TEST_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_TEST_APP_ID,
    messagingSenderId: process.env.REACT_APP_TEST_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_TEST_MEASUREMENT_ID
  };
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
