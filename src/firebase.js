import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqVBsu6Naj6IEkGVYbnUtynfn7r7uAIjo",
    authDomain: "netflix-clone-7e4d6.firebaseapp.com",
    projectId: "netflix-clone-7e4d6",
    storageBucket: "netflix-clone-7e4d6.appspot.com",
    messagingSenderId: "1002126945578",
    appId: "1:1002126945578:web:116cb28304509d5d0d0253"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;