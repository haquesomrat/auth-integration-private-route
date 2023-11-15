import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK_6TK_Jpv_cnaXkjr0WYYZZHtNfWYNcI",
  authDomain: "auth-integration-private-aa719.firebaseapp.com",
  projectId: "auth-integration-private-aa719",
  storageBucket: "auth-integration-private-aa719.appspot.com",
  messagingSenderId: "750466594798",
  appId: "1:750466594798:web:1ece5c2e80ec95085d40ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
