import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCcx6VwE6z4dgOrblxNoUGomupduER9Cz4",
    authDomain: "book-santa-d7a7a.firebaseapp.com",
    databaseURL: "https://book-santa-d7a7a.firebaseio.com",
    projectId: "book-santa-d7a7a",
    storageBucket: "book-santa-d7a7a.appspot.com",
    messagingSenderId: "667457762228",
    appId: "1:667457762228:web:d367d5948afc5b924a38e1",
    measurementId: "G-LZ5YKY0DCJ"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();