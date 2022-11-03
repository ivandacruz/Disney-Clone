import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOo0diCJ0KRCo-aw2JPdu-g6gcCheSA7M",
    authDomain: "disney-clone-c2c5c.firebaseapp.com",
    projectId: "disney-clone-c2c5c",
    storageBucket: "disney-clone-c2c5c.appspot.com",
    messagingSenderId: "160960619802",
    appId: "1:160960619802:web:cad00977935575cb3338a3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;























// padrao novo






// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";  // firebase 
// import { getFirestore } from "firebase/firestore";  // firestore
// import { getAuth, GoogleAuthProvider } from "firebase/auth"; // googleauthentication
// import { getStorage } from "firebase/storage"; // storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDOo0diCJ0KRCo-aw2JPdu-g6gcCheSA7M",
//     authDomain: "disney-clone-c2c5c.firebaseapp.com",
//     projectId: "disney-clone-c2c5c",
//     storageBucket: "disney-clone-c2c5c.appspot.com",
//     messagingSenderId: "160960619802",
//     appId: "1:160960619802:web:cad00977935575cb3338a3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();
// const googleProvider = new GoogleAuthProvider();  
// const storage = getStorage();


// export { auth, googleProvider, storage };
// export default db;