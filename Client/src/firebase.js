import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDrfnelg4MBZ3WGqHhdHHPEA3qW3VriKI0',
    authDomain: 'intern2022-tgdd.firebaseapp.com',
    projectId: 'intern2022-tgdd',
    storageBucket: 'intern2022-tgdd.appspot.com',
    messagingSenderId: '19179792366',
    appId: '1:19179792366:web:ce3fa759ce07d2197e90ff',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
