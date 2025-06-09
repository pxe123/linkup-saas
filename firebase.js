import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'; 

// Substitua pelas suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAO65rYmLXDGj38pIIS3btlX6rFv9-CvY0",
  authDomain: "linkup-saas.firebaseapp.com",
  projectId: "linkup-saas",
  storageBucket: "linkup-saas.firebasestorage.app",
  messagingSenderId: "145227241799",
  appId: "1:145227241799:web:4bb7dbc209f14c44c89462"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportando para usar no app.js
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;