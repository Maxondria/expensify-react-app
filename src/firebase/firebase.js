import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWmzDdrJcYBgih8lM5rAKBna3S_mRC-OM",
  authDomain: "expensify-react-app-9aa8c.firebaseapp.com",
  databaseURL: "https://expensify-react-app-9aa8c.firebaseio.com",
  projectId: "expensify-react-app-9aa8c",
  storageBucket: "",
  messagingSenderId: "299007655017",
  appId: "1:299007655017:web:1e0a1147cdb3a1b6e5b6f8",
  measurementId: "G-6J9WH3QBDW"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
