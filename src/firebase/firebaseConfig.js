import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpuZzSLS_t_3Swe8NRN0Ga0q_gvc-qV_I",
  authDomain: "react-firebase-2-51a41.firebaseapp.com",
  projectId: "react-firebase-2-51a41",
  storageBucket: "react-firebase-2-51a41.appspot.com",
  databaseURL: "https://react-firebase-2-51a41-default-rtdb.firebaseio.com/",
  messagingSenderId: "735602087379",
  appId: "1:735602087379:web:79c3b7103a3e0e36d54b26",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
// var db = firebase.firestore();

export default db;
