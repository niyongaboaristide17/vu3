// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdMdDFVEgYvomLwzseeQk095QDz65hBno",
  authDomain: "vue-full-course-add88.firebaseapp.com",
  projectId: "vue-full-course-add88",
  storageBucket: "vue-full-course-add88.appspot.com",
  messagingSenderId: "825075844368",
  appId: "1:825075844368:web:6344a21c447e4040f61195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
