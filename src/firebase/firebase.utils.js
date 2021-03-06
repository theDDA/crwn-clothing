import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDu_lJbKZ6mFWmnIMAYYEAXyNfTfUKM8AI",
  authDomain: "crwn-db-9742c.firebaseapp.com",
  projectId: "crwn-db-9742c",
  storageBucket: "crwn-db-9742c.appspot.com",
  messagingSenderId: "281144086834",
  appId: "1:281144086834:web:8ab7e92ea6a9393ce5872b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
