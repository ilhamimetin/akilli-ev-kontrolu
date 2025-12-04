// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDiP6YIGgjDIP2ZKDdc13QClK9YDjxp1s",
  authDomain: "akilli-ev-kontrolu.firebaseapp.com",
  projectId: "akilli-ev-kontrolu",
  storageBucket: "akilli-ev-kontrolu.firebasestorage.app",
  messagingSenderId: "499731987180",
  appId: "1:499731987180:web:760e4df40cc529de85c3c9",
  databaseURL:"https://akilli-ev-kontrolu-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
