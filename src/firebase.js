import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDYrXwFHxGhdqbpFa7d5Eqj1x-6KrLbBzg",
  authDomain: "tinder-clone-8f2c0.firebaseapp.com",
  projectId: "tinder-clone-8f2c0",
  storageBucket: "tinder-clone-8f2c0.appspot.com",
  messagingSenderId: "815417593262",
  appId: "1:815417593262:web:43249073154d1517d84c3f",
  measurementId: "G-WS99QFDH38",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
