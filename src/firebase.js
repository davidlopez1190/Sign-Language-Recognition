import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sign-language-web-app-e2b56.firebaseapp.com",
  projectId: "sign-language-web-app-e2b56",
  storageBucket: "sign-language-web-app-e2b56.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

