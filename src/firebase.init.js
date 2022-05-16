// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};
// -------
// const firebaseConfig = {
//     apiKey: "AIzaSyBXvGOQaxzQ0cLdZJSzHoOBD8HsuZABpmM",
//     authDomain: "doctors-portal-8bbf6.firebaseapp.com",
//     projectId: "doctors-portal-8bbf6",
//     storageBucket: "doctors-portal-8bbf6.appspot.com",
//     messagingSenderId: "1069696612125",
//     appId: "1:1069696612125:web:11995456ebbfeaacb353f4"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;