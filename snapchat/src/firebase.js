import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNx2kw1e-WOg50bYlk7AOEDXZWcDF-HuI",
  authDomain: "snapchat-535d8.firebaseapp.com",
  projectId: "snapchat-535d8",
  storageBucket: "snapchat-535d8.appspot.com",
  messagingSenderId: "788277601912",
  appId: "1:788277601912:web:928e68cdd1ff01a9882f8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
