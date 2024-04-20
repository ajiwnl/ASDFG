// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5NXDIma6vkMP_jTGq3_-gJ0u8txIWEhU",
  authDomain: "superduper-dbaf8.firebaseapp.com",
  projectId: "superduper-dbaf8",
  storageBucket: "superduper-dbaf8.appspot.com",
  messagingSenderId: "383945275414",
  appId: "1:383945275414:web:c8d12f298ab53e19c4dd37",
  measurementId: "G-CBJ8JL04EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);