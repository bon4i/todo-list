import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDYtyZmP_lTvmVMtGl9Kxl4TLG4HwvRSzk',
    authDomain: 'todos-c6667.firebaseapp.com',
    projectId: 'todos-c6667',
    storageBucket: 'todos-c6667.appspot.com',
    messagingSenderId: '488461744381',
    appId: '1:488461744381:web:559d58883f3a1e8da1e694',
    databaseURL: 'https://todos-c6667-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
