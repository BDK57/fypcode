import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBbmCL8uomrXMgrdp5LyJ-fhgBQgKNc6ic",
  authDomain: "excellent-guard-401911.firebaseapp.com",
  projectId: "excellent-guard-401911",
  storageBucket: "excellent-guard-401911.appspot.com",
  messagingSenderId: "860179164948",
  appId: "1:860179164948:web:f46d59420ad54e73f91c01"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);

export const provider = new GoogleAuthProvider();


