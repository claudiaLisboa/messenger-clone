import firebase from "firebase/compat/app";
import "firebase/compat/auth";


/*added new fille firebase because Key was exposed*/
export const auth = firebase.initializeApp ({
            apiKey: process.env.REACT_APP_API_FIREBASE_KEY,
            authDomain: "messenger-clone-3e824.firebaseapp.com",
            projectId: "messenger-clone-3e824",
            storageBucket: "messenger-clone-3e824.appspot.com",
            messagingSenderId: process.env.REACT_APP_API_FIREBASE_MESSAGING_SENDER_I,
            appId: process.env.REACT_APP_API_FIREBASE_APP_ID
}).auth();

