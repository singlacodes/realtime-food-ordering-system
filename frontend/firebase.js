// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cafebytes-food-del.firebaseapp.com",
  projectId: "cafebytes-food-del",
  storageBucket: "cafebytes-food-del.firebasestorage.app",
  messagingSenderId: "499920627236",
  appId: "1:499920627236:web:e323d11585afde04ac9ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {app,auth};
      