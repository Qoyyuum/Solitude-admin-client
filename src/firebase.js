import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {functions} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIccGIIVBGgPcWmOFp7OhwOWq2rUSOXlc",
  authDomain: "solitude-admin-client.firebaseapp.com",
  projectId: "solitude-admin-client",
  storageBucket: "solitude-admin-client.appspot.com",
  messagingSenderId: "74737409636",
  appId: "1:74737409636:web:8f1352a5217f1413768971",
  measurementId: "G-6SBZQDXKCM"
};
  
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

