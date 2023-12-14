import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "babyland-542b7.firebaseapp.com",
    projectId: "babyland-542b7",
    storageBucket: "babyland-542b7.appspot.com",
    messagingSenderId: "220354475524",
    appId: "1:220354475524:web:561867ba486b1d961e6751"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);