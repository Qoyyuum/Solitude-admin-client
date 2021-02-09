import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "solitude-admin-client.firebaseapp.com",
    projectId: "solitude-admin-client",
    storageBucket: "solitude-admin-client.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
  
const provider = new firebase.auth.GoogleAuthProvider();



export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();