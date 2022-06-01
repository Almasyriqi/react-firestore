import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyBTzXvRPbpwzemUYBpuhk3cPpRDmATmyJA",
    authDomain: "reactfirestore-fca2f.firebaseapp.com",
    projectId: "reactfirestore-fca2f",
    storageBucket: "reactfirestore-fca2f.appspot.com",
    messagingSenderId: "995106469944",
    appId: "1:995106469944:web:3d44bdb027a92584904ecd"
}

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;