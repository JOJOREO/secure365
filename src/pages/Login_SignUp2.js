import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import background from "../images/trial_pics/background2.png";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";

const Login_SignUp2 = () => {
  let [authMode, setAuthMode] = useState("login");
  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  const [loginEmail, setLoginEmail] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");

  const [signUpUsername, setSignUpUsername] = useState("");

  const [loginPwd, setLoginPwd] = useState("");
  const [loginIsRevealPwd, setLoginIsRevealPwd] = useState(false);

  const [SignUpPwd, setSignUpPwd] = useState("");
  const [signUpisRevealPwd, setSignUpIsRevealPwd] = useState(false);

  const [SignUpRepeatPwd, setSignUpRepeatPwd] = useState("");
  const [signUpRepeatisRevealPwd, setsignUpRepeatIsRevealPwd] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };

  if (authMode === "login") {
    return (
      <div
        className="Auth-form-container"
        style={backgroundStyle}
        // style={{ backgroundImage: `url${background}` }}
      >
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span
                className="link-primary"
                onClick={changeAuthMode}
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="loginEmail"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                // value={loginEmailInput}
              />
            </div>
            <div className="form-group mt-3 pwd-container">
              <label>Password</label>
              <input
                name="loginPwd"
                placeholder="Enter Password"
                type={loginIsRevealPwd ? "text" : "password"}
                className="form-control mt-1"
                value={loginPwd}
                onChange={(e) => setLoginPwd(e.target.value)}
              />
              <img
                title={loginIsRevealPwd ? "Hide password" : "Show password"}
                src={loginIsRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setLoginIsRevealPwd((prevState) => !prevState)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container" style={backgroundStyle}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span
              className="link-primary"
              onClick={changeAuthMode}
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane_Doe123"
              value={signUpUsername}
              onChange={(e) => setSignUpUsername(e.target.value)}
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
            />

            {/*   
            const [SignUpPwd, setSignUpPwd] = useState("");
            const [signUpisRevealPwd, setSignUpIsRevealPwd] = useState(false); */}
            <img
              title={signUpisRevealPwd ? "Hide password" : "Show password"}
              src={signUpisRevealPwd ? hidePwdImg : showPwdImg}
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
              src={signUpRepeatisRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() =>
                setsignUpRepeatIsRevealPwd((prevState) => !prevState)
              }
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
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
export default Login_SignUp2;
