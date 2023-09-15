
import { initializeApp } from "firebase/app";
import { getFirestore } from `firebase/firestore`


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh5BOWGZz6w27cF-sHq5NrL-xodyEBsmg",
  authDomain: "nike-ecommerce-reactjs.firebaseapp.com",
  projectId: "nike-ecommerce-reactjs",
  storageBucket: "nike-ecommerce-reactjs.appspot.com",
  messagingSenderId: "535639358449",
  appId: "1:535639358449:web:a50d3c55ee823829212250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)