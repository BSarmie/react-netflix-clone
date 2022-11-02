import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEjC_c0p56bI-nxP-uDPycPQEnUU76gnE",
    authDomain: "react-netflix-clone-8c5da.firebaseapp.com",
    projectId: "react-netflix-clone-8c5da",
    storageBucket: "react-netflix-clone-8c5da.appspot.com",
    messagingSenderId: "1080249022586",
    appId: "1:1080249022586:web:c6b9333c4ccaedc74623c3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;