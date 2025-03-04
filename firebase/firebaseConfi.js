import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdpgTyl_CH6hnxjmricn3CmsdlCRIrxw8",
    authDomain: "chatgpt-eff46.firebaseapp.com",
    projectId: "chatgpt-eff46",
    storageBucket: "chatgpt-eff46.firebasestorage.app",
    messagingSenderId: "550899722386",
    appId: "1:550899722386:web:feb0d9db51ec7de8fe5e4b",
    measurementId: "G-QENNQP5M0Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
