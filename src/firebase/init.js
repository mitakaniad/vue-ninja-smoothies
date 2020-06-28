import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC67pkuKjhAUFdle-QPJBb_VtHlvUvQYgI",
    authDomain: "udemy-vue-26917.firebaseapp.com",
    databaseURL: "https://udemy-vue-26917.firebaseio.com",
    projectId: "udemy-vue-26917",
    storageBucket: "udemy-vue-26917.appspot.com",
    messagingSenderId: "10628298499",
    appId: "1:10628298499:web:b04c94cde4d5004b3e5b36",
    measurementId: "G-YXR2254YJN"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebase.analytics();

  export default firebaseApp.firestore()