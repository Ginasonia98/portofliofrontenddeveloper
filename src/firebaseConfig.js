import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjhQxsEjIhbxRGlljTomvQXxX-3dG7zcI",
  authDomain: "contact-a0b88.firebaseapp.com",
  projectId: "contact-a0b88",
  storageBucket: "contact-a0b88.appspot.com",
  messagingSenderId: "496433340677",
  appId: "1:496433340677:web:a5a844252a17caaec3976c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);