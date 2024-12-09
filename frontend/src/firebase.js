// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblog-b2331.firebaseapp.com",
  projectId: "myblog-b2331",
  storageBucket: "myblog-b2331.appspot.com",
  messagingSenderId: "375916962915",
  appId: "1:375916962915:web:2b0618f2a7de64ab2c4456"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
