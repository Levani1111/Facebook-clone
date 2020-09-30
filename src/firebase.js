import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDElCGefsYzeyDXndOPcI0ZepgxbYeagmI",
  authDomain: "facebook-clone-579e8.firebaseapp.com",
  databaseURL: "https://facebook-clone-579e8.firebaseio.com",
  projectId: "facebook-clone-579e8",
  storageBucket: "facebook-clone-579e8.appspot.com",
  messagingSenderId: "115127815000",
  appId: "1:115127815000:web:59c9da2efe574b40c7f32d",
  measurementId: "G-4FLYJQ5YLS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
