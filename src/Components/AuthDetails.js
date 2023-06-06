import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [nickName, setNickname] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setAuthUser(user);
        setNickname(user.displayName);
      } else {
        setAuthUser(null);
        setNickname(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {authUser ? (
        <>
          <li>
            {/* <a className="signedIn"> {`Hello, ${authUser.email}`} </a> */}
            {/* <a className="signedIn"> {`Hello, ${authUser.displayName}`} </a> */}
            <a className="signedIn">
              <span style={{ color: "black" }}>hello ,</span>{" "}
              <span
              // style={{ color: "blue" }}
              >{` ${authUser.displayName}`}</span>
            </a>
          </li>
          <li>
            <button
              //   style={{ background: "none" }}
              // class="cv-btn"
              className="signOutBtn"
              onClick={userSignOut}
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        // <li>Signed Out</li>
        <li></li>
      )}
    </>
  );
};

export default AuthDetails;
