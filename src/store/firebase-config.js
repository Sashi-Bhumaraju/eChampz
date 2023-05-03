// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAycqei3yYngFLCBPZrVHG6YtMfBqf-V0Y",
  authDomain: "echampz.firebaseapp.com",
  projectId: "echampz",
  storageBucket: "echampz.appspot.com",
  messagingSenderId: "1012780791952",
  appId: "1:1012780791952:web:322d54cb894431b5e60015",
  measurementId: "G-N23BSP8Y1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);





