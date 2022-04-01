import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHv5X81cPXCiTnL3Mwy9jEm63AxSSXqDw",
    authDomain: "my-money-e4b14.firebaseapp.com",
    projectId: "my-money-e4b14",
    storageBucket: "my-money-e4b14.appspot.com",
    messagingSenderId: "926305443841",
    appId: "1:926305443841:web:6e8bf25bc965990a832000"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }