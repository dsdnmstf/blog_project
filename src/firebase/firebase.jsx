// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChxL-7n7C0QNivQS1Qvy7nsx17GE0wjS4",
  authDomain: "blog-project-f1f29.firebaseapp.com",
  projectId: "blog-project-f1f29",
  storageBucket: "blog-project-f1f29.appspot.com",
  messagingSenderId: "1078155596700",
  appId: "1:1078155596700:web:65cd29203f1d4366f06e59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// !Initialize Firebase Authentication
const auth = getAuth(app);

export const userStateChecker = () => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
        
    } else {
    }
  });
};
