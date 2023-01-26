
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCskttrwrDKMMPqFKyXGjwzeiBYuXmaP4Y",
  authDomain: "authapp-nero.firebaseapp.com",
  projectId: "authapp-nero",
  storageBucket: "authapp-nero.appspot.com",
  messagingSenderId: "198893206025",
  appId: "1:198893206025:web:c07cd2306d9d61e1df16d8",
  measurementId: "G-N37FN49D98"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};