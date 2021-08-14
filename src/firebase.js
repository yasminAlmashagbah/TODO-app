import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCEw0dp-fGXRaGclLLFySl7YSQdLjUJmc0",
  authDomain: "todo-app-cp-e378c.firebaseapp.com",
  projectId: "todo-app-cp-e378c",
  storageBucket: "todo-app-cp-e378c.appspot.com",
  messagingSenderId: "103566742033",
  appId: "1:103566742033:web:24ef964f77226b0b1f57b0",
  measurementId: "G-2WTNBJMR0D",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
export default db;
