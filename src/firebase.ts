// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyWZ2RfmbZW4Z9P-cvtDtQ71xVIXBSEM4',
  authDomain: 'react-firebase-auth-a906f.firebaseapp.com',
  projectId: 'react-firebase-auth-a906f',
  storageBucket: 'react-firebase-auth-a906f.appspot.com',
  messagingSenderId: '543171603111',
  appId: '1:543171603111:web:9850c8ebe5fc902d170982',
  measurementId: 'G-20DZ9YYVX1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore()
