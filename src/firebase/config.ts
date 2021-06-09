import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCZ2hcoNc9NdjJHZPqtUUOEh2LbobAU5JQ",
//     authDomain: "journal-app-df851.firebaseapp.com",
//     projectId: "journal-app-df851",
//     storageBucket: "journal-app-df851.appspot.com",
//     messagingSenderId: "195648662375",
//     appId: "1:195648662375:web:6a2dc1ae15aeb24b549dc2"
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDnioeXxm1IE_0xSyVe_fgE9brI4YIGOGI",
//     authDomain: "fir-fotos-62edb.firebaseapp.com",
//     databaseURL: "https://fir-fotos-62edb.firebaseio.com",
//     projectId: "fir-fotos-62edb",
//     storageBucket: "fir-fotos-62edb.appspot.com",
//     messagingSenderId: "664746972203",
//     appId: "1:664746972203:web:6453db1dab8a63c5b0c66e",
//     measurementId: "G-M6GGF8RZP0"
// };

// if (process.env.NODE_ENV === 'test'){
//     firebase.initializeApp(firebaseConfigTesting);
// } else{
    // }
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, googleAuthProvider, firebase
}