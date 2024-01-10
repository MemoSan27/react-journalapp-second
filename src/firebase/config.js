// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRaAzBRNKsbu9L6EwvygMmr5UsFkJcNnw",
  authDomain: "journal-backend-14821.firebaseapp.com",
  projectId: "journal-backend-14821",
  storageBucket: "journal-backend-14821.appspot.com",
  messagingSenderId: "198626731956",
  appId: "1:198626731956:web:3fbfa1f34ee9901005b4e1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
