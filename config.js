import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAOOKjTHtqEO6zgxSx7MTrxKpERNXGT2T8",
    authDomain: "pro67-68643.firebaseapp.com",
    databaseURL: "https://pro67-68643-default-rtdb.firebaseio.com",
    projectId: "pro67-68643",
    storageBucket: "pro67-68643.appspot.com",
    messagingSenderId: "976713466132",
    appId: "1:976713466132:web:cbb96ede03d7270b13c201"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();