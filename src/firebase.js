// import firebase from "firebase/compat/app";
// import "firebase/auth";
// import { getAuth } from "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyCxVznkCgEZdH5Sv8DyXX9BMpG5mFL3Of0",
//   authDomain: "secura365web.firebaseapp.com",
//   projectId: "secura365web",
//   storageBucket: "secura365web.appspot.com",
//   messagingSenderId: "770649618150",
//   appId: "1:770649618150:web:ce2e84c64038aa255e6d27",
//   //   apiKey: process.env.REACT_APP_API_KEY,
//   //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   //   projectId: process.env.REACT_APP_PROJECT_ID,
//   //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   //   messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
//   //   appId: process.env.REACT_APP_APP_ID,
// });

// // export const auth = app.auth();
// export const auth = getAuth(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCxVznkCgEZdH5Sv8DyXX9BMpG5mFL3Of0",
  authDomain: "secura365web.firebaseapp.com",
  projectId: "secura365web",
  storageBucket: "secura365web.appspot.com",
  messagingSenderId: "770649618150",
  appId: "1:770649618150:web:ce2e84c64038aa255e6d27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
