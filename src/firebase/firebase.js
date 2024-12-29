import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnuXcWb3iJbYyXD9FjJ_wxdsVd6WWrmaA",
  authDomain: "wedding-invite-97fb7.firebaseapp.com",
  projectId: "wedding-invite-97fb7",
  storageBucket: "wedding-invite-97fb7.firebasestorage.app",
  messagingSenderId: "1052998637154",
  appId: "1:1052998637154:web:5cdb5cb956e7ba716ba33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
