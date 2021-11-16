import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgWhv9Z6XL5p-eCwaNNTF2weulrixU2ZQ",
  authDomain: "ecommerce-saller.firebaseapp.com",
  projectId: "ecommerce-saller",
  storageBucket: "ecommerce-saller.appspot.com",
  messagingSenderId: "730386408001",
  appId: "1:730386408001:web:50b4ac028fc385d5bf5cc0",
  measurementId: "G-YYSL9J3CE1",
};
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
