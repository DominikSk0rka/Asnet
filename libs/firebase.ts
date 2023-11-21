// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBUNCMLmahf0fjy-iHagLoh1X0GtjPM0M",
  authDomain: "asnet-shop-e3990.firebaseapp.com",
  projectId: "asnet-shop-e3990",
  storageBucket: "asnet-shop-e3990.appspot.com",
  messagingSenderId: "931847115953",
  appId: "1:931847115953:web:79f800a3d7e7866a7c7e90"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp