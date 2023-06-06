import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import background from "../images/trial_pics/background2.png";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const SignUp2_only = () => {
  let [authMode, setAuthMode] = useState("login");
  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  const SignUpEmailRef = useRef();
  const SignUpUserRef = useRef();
  const SignUpPWDRef = useRef();
  const SignUpPWDRepeatRef = useRef();
  const LoginEmailRef = useRef();
  const LoginPWDRef = useRef();

  // const { Signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [success, setsuccess] = useState("");
  // alert(` initialize ,\n ${error}`);
  const [loading, setLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");

  const [signUpUsername, setSignUpUsername] = useState("user");

  const [loginPwd, setLoginPwd] = useState("");
  const [loginIsRevealPwd, setLoginIsRevealPwd] = useState(false);

  const [SignUpPwd, setSignUpPwd] = useState("");
  const [signUpisRevealPwd, setSignUpIsRevealPwd] = useState(false);

  const [SignUpRepeatPwd, setSignUpRepeatPwd] = useState("");
  const [signUpRepeatisRevealPwd, setsignUpRepeatIsRevealPwd] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, loginEmail, loginPwd)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // updateProfile(auth.currentUser, {
  //   displayName: signUpUsername,
  //   // photoURL: "https://example.com/jane-q-user/profile.jpg",
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //   });

  // const signIn = (e) => {
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, loginEmail, loginPwd)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(userCredential);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error + "\n");
  //       console.log(error.message + "\n");
  //       console.log(error);
  //       setsuccess("");
  //       setError(errorCode.substring(5, errorCode.length));
  //       // ..
  //     });
  //   // console.log(`Signed in As ${loginEmail}`);
  //   setsuccess(`Signed in As ${loginEmail}`);
  // };
  const signUp = (e) => {
    e.preventDefault();
    if (SignUpPwd !== SignUpRepeatPwd) {
      return setError("Passwords dont match");
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signUpEmail, SignUpPwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(userCredential);

        updateProfile(user, { displayName: signUpUsername });

        setError("");
        // setsuccess(`SignUp  with email ( ${signUpEmail} ) is succesfull !`);
        setsuccess(`SignUp succesfull! \n
        redirecting to homePage...`);
        setLoading(true);
        setTimeout(moveToHome, 3000);
        function moveToHome() {
          document.location.href = "/";
        }
        // ...
      })
      .then(function (result) {
        return result.user.updateProfile({
          displayName: "Your Name",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(`${signUpEmail},\n${SignUpPwd}`);
        console.log(error.code + "\n");
        console.log(error.message + "\n");
        console.log(error);
        console.log(errorCode.substring(5, errorCode.length));
        setsuccess("");
        setError(errorCode.substring(5, errorCode.length));
        // ..
      });
  };

  // if (authMode === "login") {
  //   return (
  //     <div
  //       className="Auth-form-container"
  //       style={backgroundStyle}
  //       // style={{ backgroundImage: `url${background}` }}
  //     >
  //       <form className="Auth-form" onSubmit={signIn}>
  //         <div className="Auth-form-content">
  //           <h3 className="Auth-form-title">Login</h3>
  //           {success && (
  //             <Alert style={{ textAlign: "center" }} variant="success ">
  //               {success}
  //             </Alert>
  //           )}
  //           {error && (
  //             <Alert style={{ textAlign: "center" }} variant="danger">
  //               {error}
  //             </Alert>
  //           )}
  //           <div className="text-center">
  //             Not registered yet?{" "}
  //             <span
  //               className="link-primary"
  //               onClick={changeAuthMode}
  //               style={{ cursor: "pointer" }}
  //             >
  //               Sign Up
  //             </span>
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Email address</label>
  //             <input
  //               name="loginEmail"
  //               type="email"
  //               className="form-control mt-1"
  //               placeholder="Enter email"
  //               value={loginEmail}
  //               onChange={(e) => setLoginEmail(e.target.value)}
  //               ref={LoginEmailRef}
  //               // value={loginEmailInput}
  //             />
  //           </div>
  //           <div className="form-group mt-3 pwd-container">
  //             <label>Password</label>
  //             <input
  //               name="loginPwd"
  //               placeholder="Enter Password"
  //               type={loginIsRevealPwd ? "text" : "password"}
  //               className="form-control mt-1"
  //               value={loginPwd}
  //               onChange={(e) => setLoginPwd(e.target.value)}
  //               ref={LoginPWDRef}
  //             />
  //             <img
  //               title={loginIsRevealPwd ? "Hide password" : "Show password"}
  //               src={!loginIsRevealPwd ? hidePwdImg : showPwdImg}
  //               onClick={() => setLoginIsRevealPwd((prevState) => !prevState)}
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button type="submit" className="btn btn-primary">
  //               Login
  //             </button>
  //           </div>
  //           <p className="text-center mt-2">
  //             Forgot <a href="#">password?</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
  // alert(` try 0,\n ${error}`);
  return (
    <div className="Auth-form-container" style={backgroundStyle}>
      {/* <form className="Auth-form" onSubmit={handleSubmit}> */}
      <form className="Auth-form" onSubmit={signUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          {/* {currentUser && currentUser.email} */}
          {/* {JSON.stringify(currentUser)} */}
          {success && (
            <Alert style={{ textAlign: "center" }} variant="success ">
              {success}
            </Alert>
          )}
          {error && (
            <Alert style={{ textAlign: "center" }} variant="danger">
              {error}
            </Alert>
          )}
          <div className="text-center">
            Already registered?{" "}
            <Link
              to={"/Login"}
              // href="#login/SignUp"
              // className={props.PresentationVariable ? "active" : ""}
              // className={props2.PresentationVariable ? "active" : ""}
            >
              <span
                className="link-primary"
                onClick={changeAuthMode}
                style={{ cursor: "pointer" }}
              >
                Login
              </span>
            </Link>
            {/* <span
              className="link-primary"
              onClick={changeAuthMode}
              style={{ cursor: "pointer" }}
            >
              Login
            </span> */}
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control mt-1"
              placeholder="e.g Joe_seif2964"
              value={signUpUsername}
              onChange={(e) => setSignUpUsername(e.target.value)}
              ref={SignUpUserRef}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              ref={SignUpEmailRef}
              //   onChange={setsignUpEmailInput(signUpEmailInput)}
              //   value={signUpEmailInput}
            />
          </div>
          <div className="form-group mt-3 pwd-container">
            <label>Password</label>
            <input
              // type={passwordType}
              // onChange={handlePasswordChange}
              // value={passwordInput}

              // type="password"

              // type={password}
              // onChange={onPasswordChange}
              // value={passwordInput}
              // placeholder="Enter password"
              // name="password"
              // className="form-control"
              name="SignUpPwd"
              placeholder="Enter Password"
              type={signUpisRevealPwd ? "text" : "password"}
              className="form-control mt-1"
              value={SignUpPwd}
              onChange={(e) => setSignUpPwd(e.target.value)}
              ref={SignUpPWDRef}
            />

            {/*   
            const [SignUpPwd, setSignUpPwd] = useState("");
            const [signUpisRevealPwd, setSignUpIsRevealPwd] = useState(false); */}
            <img
              title={signUpisRevealPwd ? "Hide password" : "Show password"}
              src={!signUpisRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setSignUpIsRevealPwd((prevState) => !prevState)}
            />
          </div>
          <div className="form-group mt-3 pwd-container">
            <label>Repeat Password</label>
            <input
              // type={passwordType}
              // onChange={handlePasswordChange}
              // value={passwordInput}

              // type="password"

              // type={password}
              // onChange={onPasswordChange}
              // value={passwordInput}
              // placeholder="Enter password"
              // name="password"
              // className="form-control"
              name="SignUpRepeatPwd"
              placeholder="Repeat Password"
              type={signUpRepeatisRevealPwd ? "text" : "password"}
              className="form-control mt-1"
              value={SignUpRepeatPwd}
              onChange={(e) => setSignUpRepeatPwd(e.target.value)}
              ref={SignUpPWDRepeatRef}

              // className="form-control mt-1"

              // placeholder="Enter password"
            />
            {/* 
            
            //   const [SignUpRepeatPwd, setSignUpRepeatPwd] = useState("");
            // const [signUpRepeatisRevealPwd, setsignUpRepeatIsRevealPwd] = useState(false);

            */}
            <img
              title={
                signUpRepeatisRevealPwd ? "Hide password" : "Show password"
              }
              src={!signUpRepeatisRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() =>
                setsignUpRepeatIsRevealPwd((prevState) => !prevState)
              }
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

//   const [SignUpRepeatPwd, setSignUpRepeatPwd] = useState("");
// const [signUpRepeatisRevealPwd, setsignUpRepeatIsRevealPwd] = useState(false);
export default SignUp2_only;
