// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOXY8MMTlRF0q8gYFTnLiRjcGmag1E0YM",
  authDomain: "react-authlontec.firebaseapp.com",
  projectId: "react-authlontec",
  storageBucket: "react-authlontec.appspot.com",
  messagingSenderId: "507695275206",
  appId: "1:507695275206:web:7612b377fe44923cf88bc7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default app;
