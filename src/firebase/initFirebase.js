import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB7qa1lvlkJzgVBoUdv6z8EkK0pGNQ-fPg",
    authDomain: "oyo-hotel.firebaseapp.com",
    projectId: "oyo-hotel",
    storageBucket: "oyo-hotel.appspot.com",
    messagingSenderId: "910310050343",
    appId: "1:910310050343:web:fcaba28f55ea662bdedc02",
    measurementId: "G-HCLNSNPHFG"
};

const initFirebaseApp = () => {
    initializeApp(firebaseConfig);
}

export default initFirebaseApp;