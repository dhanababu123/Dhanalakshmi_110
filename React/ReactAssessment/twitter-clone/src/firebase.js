
import firebase from "firebase";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhMeWBi_GlnWW38WfXu-TA4Eaqm9GliM",
  authDomain: "twitter-clone-ea520.firebaseapp.com",
  projectId: "twitter-clone-ea520",
  storageBucket: "twitter-clone-ea520.appspot.com",
  messagingSenderId: "349272538850",
  appId: "1:349272538850:web:0a85c4d07e7e3c364ca8bb",
  measurementId: "G-PQDDLZ1GV7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
