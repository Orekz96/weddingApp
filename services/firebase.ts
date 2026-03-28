import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEceiVWYY5NpaRxTod_8lo3P33b9FHnGs",
  authDomain: "anthonia-swedding.firebaseapp.com",
  projectId: "anthonia-swedding",
  storageBucket: "anthonia-swedding.firebasestorage.app",
  messagingSenderId: "47027012771",
  appId: "1:47027012771:web:c8ef3b9950a04967c1eb16",
  measurementId: "G-6S0H08BVG5"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);