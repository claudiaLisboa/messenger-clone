import firebase from "firebase/compat/app";
import "firebase/compat/auth";


export const auth = firebase.initializeApp ({
            apiKey: "AIzaSyCxdEnBGHRfC1wTk34w0taSYNuS9gXKamY",
            authDomain: "messenger-clone-3e824.firebaseapp.com",
            projectId: "messenger-clone-3e824",
            storageBucket: "messenger-clone-3e824.appspot.com",
            messagingSenderId: "481980457665",
            appId: "1:481980457665:web:372edf0752deab1a10ea40"
}).auth();


    // export const firebaseApp = firebase.initializeApp ({
    // apiKey: "AIzaSyCxdEnBGHRfC1wTk34w0taSYNuS9gXKamY",
    // authDomain: "messenger-clone-3e824.firebaseapp.com",
    // projectId: "messenger-clone-3e824",
    // storageBucket: "messenger-clone-3e824.appspot.com",
    // messagingSenderId: "481980457665",
    // appId: "1:481980457665:web:372edf0752deab1a10ea40"
    // })
    // const db = firebaseApp.firestore();
    // export default db;