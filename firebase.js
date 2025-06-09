import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'; 

// Substitua pelas suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXX",
  authDomain: "linkup-saas.firebaseapp.com",
  projectId: "linkup-saas",
  storageBucket: "linkup-saas.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportando para usar no app.js
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;