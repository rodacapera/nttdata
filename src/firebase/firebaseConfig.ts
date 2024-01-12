import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWMk2WlthfMA5DF2SgoHnmyvfxjoidwIA',
  authDomain: 'nttdata-ff8ac.firebaseapp.com',
  projectId: 'nttdata-ff8ac',
  storageBucket: 'nttdata-ff8ac.appspot.com',
  messagingSenderId: '564953532115',
  appId: '1:564953532115:web:68c88876d4b42c92bdf626',
  measurementId: 'G-RXFX7Z6S98',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
