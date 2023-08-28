import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const SENDER_ID = process.env.REACT_APP_FIREBASE_SENDER_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

// Firebase configuration for web app
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: `${PROJECT_ID}.firebaseapp.com`,
	projectId: PROJECT_ID,
	storageBucket: `${PROJECT_ID}.appspot.com`,
	messagingSenderId: SENDER_ID,
	appId: APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
