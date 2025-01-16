import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV91Ummf_sjrKgGiQTh1xkwp4Wx-lMi9Q",
  authDomain: "teste-7198e.firebaseapp.com",
  projectId: "teste-7198e",
  storageBucket: "teste-7198e.firebasestorage.app",
  messagingSenderId: "760098199505",
  appId: "1:760098199505:web:bf1fc9fb2f3e54c9a132f0",
  measurementId: "G-V1QCTKEK5Y",
};

const fireBase = initializeApp(firebaseConfig);

export const Db = getFirestore(fireBase);
export const auth = getAuth(fireBase);
