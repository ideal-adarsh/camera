// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCznROyG7tO_5vk1-hXPcVxSEVGQMyeTCY",
  authDomain: "image-recognation-20ee8.firebaseapp.com",
  projectId: "image-recognation-20ee8",
  storageBucket: "image-recognation-20ee8.appspot.com",
  messagingSenderId: "409078402115",
  appId: "1:409078402115:web:6bc3b8fdeeb9ae0d7b58f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectDb = getFirestore(app);

export { projectDb };
