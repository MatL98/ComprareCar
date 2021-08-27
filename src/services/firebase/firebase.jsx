import firebase from 'firebase/app';
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE
    apiKey: "AIzaSyCU45zp8r2L0RhDqhgcLSRDUUOyI-yQMEs",
    authDomain: "comprarecar.firebaseapp.com",
    projectId: "comprarecar",
    storageBucket: "comprarecar.appspot.com",
    messagingSenderId: "473628502660",
    appId: "1:473628502660:web:7d2cbe47643bb9d1f1b0d1"
};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase(){
  return app;
}

export const database = firebase.firestore();
