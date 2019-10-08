import * as firebase from "firebase";

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };
//
// firebase.initializeApp(config);
//
// const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//
// export { firebase, googleAuthProvider, database as default };

//save data - new
// database.ref().set({
//   name: "Max A BigBudet",
//   isSingle: false,
//   stressLevel: 7,
//   occupation: "Software Engineer",
//   location: {
//     village: "Najjera",
//     district: "Wakiso"
//   }
// });

//Subscriptions

// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });
//
// setTimeout(() => {
//   database
//     .ref()
//     .update({
//       "location/village": "America"
//     })
//     .then(() => console.log("Updated"));
// }, 7000);
//read data

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log(e));

//update data

// database.ref().update({
//   stressLevel: 9,
//   'location/village': 'Amazon',
// });

//remove all data

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

//get data at some location

// database.ref('location/village')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

//save data to array expenses []

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// get data once

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

//subscribt to expense changes

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
// //   });

//delete a particular note id

// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

//EVENTS

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
