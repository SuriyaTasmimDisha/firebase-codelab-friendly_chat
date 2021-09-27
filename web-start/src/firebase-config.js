/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBw5vLUYJX4YP-_C293pLMC3J5in39O10",
  authDomain: "fir-project-2ca1f.firebaseapp.com",
  projectId: "fir-project-2ca1f",
  storageBucket: "fir-project-2ca1f.appspot.com",
  messagingSenderId: "712135175180",
  appId: "1:712135175180:web:5f40a9e662df79e72a9229",
  measurementId: "G-VD83XVZTHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDBw5vLUYJX4YP-_C293pLMC3J5in39O10",
  authDomain: "fir-project-2ca1f.firebaseapp.com",
  projectId: "fir-project-2ca1f",
  storageBucket: "fir-project-2ca1f.appspot.com",
  messagingSenderId: "712135175180",
  appId: "1:712135175180:web:5f40a9e662df79e72a9229",
  measurementId: "G-VD83XVZTHJ"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}