import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAYsPudXRtWqWUgy4Mb_8CKoH6e9wAqe0k",
    authDomain: "app-a345d.firebaseapp.com",
    projectId: "app-a345d",
    storageBucket: "app-a345d.appspot.com",
    messagingSenderId: "535606831001",
    appId: "1:535606831001:web:4a0b8aea5e4387db22d508",
    databaseURL: "https://app-a345d-default-rtdb.firebaseio.com",
  };

export const app = initializeApp(firebaseConfig);