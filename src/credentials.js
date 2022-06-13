// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcrCbqQoZn762mpVsxKbqbiGgAz4i1LOM',
  authDomain: 'progreso-licenciatura.firebaseapp.com',
  projectId: 'progreso-licenciatura',
  storageBucket: 'progreso-licenciatura.appspot.com',
  messagingSenderId: '152547613755',
  appId: '1:152547613755:web:360a0fc2a6e964bac2101e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
