import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqM-_YWBdLKuYCImnjgVMFSlerUxb4phs",
  authDomain: "slack-clone-yt-982a2.firebaseapp.com",
  projectId: "slack-clone-yt-982a2",
  storageBucket: "slack-clone-yt-982a2.appspot.com",
  messagingSenderId: "590434940098",
  appId: "1:590434940098:web:6bf140019a9ee5d239775b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
