import { createContext } from "react";
export const userContext = createContext({});

// import React, { useContext, useEffect, useState } from "react";
// // import { auth } from "../firebase";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // const auth = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   function Signup(email, password) {
//     return createUserWithEmailAndPassword(email, password);
//   }
//   useEffect(() => {
//     //allow us to set user manually
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const value = { currentUser, Signup };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export default AuthContext;
