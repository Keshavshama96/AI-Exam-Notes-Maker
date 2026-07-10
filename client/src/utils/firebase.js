import{getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "authexamnotes-ffc82.firebaseapp.com",
  projectId: "authexamnotes-ffc82",
  storageBucket: "authexamnotes-ffc82.firebasestorage.app",
  messagingSenderId: "206040459401",
  appId: "1:206040459401:web:7f6e03a950ee1db9363e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider= new GoogleAuthProvider();

export {auth,provider}