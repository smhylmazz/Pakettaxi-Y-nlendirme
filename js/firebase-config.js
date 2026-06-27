// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// BURAYA FIREBASE CONSOLE'DAN GELEN firebaseConfig GELECEK
const firebaseConfig = {
    apiKey: "AIzaSyA3If6Dw02u86lERztg3P05GLfac1C0jLI",
    authDomain: "yonlendirme-81a45.firebaseapp.com",
    projectId: "yonlendirme-81a45",
    storageBucket: "yonlendirme-81a45.firebasestorage.app",
    messagingSenderId: "126920950281",
    appId: "1:126920950281:web:0dc2f5e4fa8018dc4f6ed8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
