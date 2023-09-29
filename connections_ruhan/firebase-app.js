//ARQUIVO COM CONFIGURAÇÕES DO APP NO FIREBASE

import { initializeApp } from "firebase/app";

//ALTERAR PARA INFORMACOES DO APP DE VCS
//PRINTS 1 e 22
const firebaseConfig = {
    apiKey: "AIzaSyCul-wuCVnr0OR4tz2pCVIkXR0gJ3lXSfU",
    authDomain: "logando-firebase.firebaseapp.com",
    projectId: "logando-firebase",
    storageBucket: "logando-firebase.appspot.com",
    messagingSenderId: "533209824849",
    appId: "1:533209824849:web:7a6b8ee98a16a10e04c270",
    measurementId: "G-65RL5RB351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}