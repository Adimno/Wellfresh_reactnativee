// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYm9LfK5vbmzNV0ymQ_FgKsGMhDtH5Z_o",
  authDomain: "wellfresh-f971a.firebaseapp.com",
  projectId: "wellfresh-f971a",
  storageBucket: "wellfresh-f971a.appspot.com",
  messagingSenderId: "183131066828",
  appId: "1:183131066828:web:375a565b4b0f9312ca0d69",
  measurementId: "G-MC4R4GPMYT"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };