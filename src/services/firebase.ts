import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHLx1O3JobzgLykdEEkazfZTdMC8WJ6PA",
  authDomain: "user-saver-th.firebaseapp.com",
  projectId: "user-saver-th",
  storageBucket: "user-saver-th.appspot.com",
  messagingSenderId: "32046341268",
  appId: "1:32046341268:web:c7252a57869d818a35a881",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };
