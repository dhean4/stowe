// Firebase Configuration for Stowe Health
// Project: stowe-landing-page

const firebaseConfig = {
    apiKey: "AIzaSyDa9tUAG-BB4e53YNw2znnapkqVclTAzmE",
    authDomain: "stowe-landing-page.firebaseapp.com",
    projectId: "stowe-landing-page",
    storageBucket: "stowe-landing-page.firebasestorage.app",
    messagingSenderId: "650890057880",
    appId: "1:650890057880:web:35b04fb59e35fd1f3718ed",
    measurementId: "G-YEJHTDM5J4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Authentication
const auth = firebase.auth();

// Initialize Storage (for images/videos)
const storage = firebase.storage();
