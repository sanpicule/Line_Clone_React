import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJ4DHNmdBYYdTj_QyuoYrUHe9bqCr_laI",
  authDomain: "line-clone-29d2c.firebaseapp.com",
  projectId: "line-clone-29d2c",
  storageBucket: "line-clone-29d2c.appspot.com",
  messagingSenderId: "590087070553",
  appId: "1:590087070553:web:7f59b303b25fc3584c2248"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };