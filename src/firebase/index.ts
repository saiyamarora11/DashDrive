import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXnCLWlP7u6FVbYSmZzRoMeakwifP7SEw",
  authDomain: "dashdrive-92ffe.firebaseapp.com",
  projectId: "dashdrive-92ffe",
  storageBucket: "dashdrive-92ffe.appspot.com",
  messagingSenderId: "853793010563",
  appId: "1:853793010563:web:bb2e4612c7066074dafcb6",
  measurementId: "G-L68PM5LKKN",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
