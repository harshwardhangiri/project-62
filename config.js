import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyArjtXNDDzuUooLjwjBAT0IRw4LsdYTCCI",
    authDomain: "school-atendence-92708.firebaseapp.com",
    databaseURL: "https://school-atendence-92708-default-rtdb.firebaseio.com",
    projectId: "school-atendence-92708",
    storageBucket: "school-atendence-92708.appspot.com",
    messagingSenderId: "577981545805",
    appId: "1:577981545805:web:389b25accf18b18a6fcb04",
    measurementId: "G-P5F6GJLNG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

   export default firebase.database();
 

  