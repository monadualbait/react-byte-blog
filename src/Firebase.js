
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6UwFmJ-fE04xpP6dPnlZ90VAfaYsPzB8",
  authDomain: "the-byte-blog.firebaseapp.com",
  projectId: "the-byte-blog",
  storageBucket: "the-byte-blog.appspot.com",
  messagingSenderId: "262647920975",
  appId: "1:262647920975:web:3b00b8fc7728c56862ed3a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword};