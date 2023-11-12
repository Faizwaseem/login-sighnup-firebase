
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// FireStore
{/* <script src=""></script> */}
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBRjH6OC076MBJMo7tbAcoo4EuZpQPOcvM",
    authDomain: "login-sighnup-5da68.firebaseapp.com",
    projectId: "login-sighnup-5da68",
    storageBucket: "login-sighnup-5da68.appspot.com",
    messagingSenderId: "198769099859",
    appId: "1:198769099859:web:cd33c868afec689f3332a6",
    measurementId: "G-92HPPH2RDT"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);

// const analytics = getAnalytics(app);
