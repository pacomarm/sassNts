import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCZ2hcoNc9NdjJHZPqtUUOEh2LbobAU5JQ",
    authDomain: "journal-app-df851.firebaseapp.com",
    projectId: "journal-app-df851",
    storageBucket: "journal-app-df851.appspot.com",
    messagingSenderId: "195648662375",
    appId: "1:195648662375:web:6a2dc1ae15aeb24b549dc2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, googleAuthProvider, firebase
}