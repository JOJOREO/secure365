import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import AuthDetails from "../Components/AuthDetails";
// import logo from "../images/website_data/logo.png";
import logo from "../images/photos_from_7oda/okokok.png";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase";
// import { NavLink } from "react-router-dom";
// const Navbar = ({ props }) => {
const Navbar = (props) => {
  console.log("props", { ...props });
  const [authUser, setAuthUser] = useState(null);
  // props.extract("ahmed");

  // //callback fnc
  // const getUser = (userValue) => {
  //   return userValue;
  // };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // console.log("authuser", authUser.email);

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

  // let [navbarMode, setNavbarMode] = useState("home");

  // setNavbarMode(props2.navbarMode);

  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // const [scroll, setScroll] = useState("category-1");

  // document.querySelectorAll("li").forEach((element) => {
  //   // element.setAttribute("class", "active");
  // });
  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  //change state to active

  //   window.onscroll = function () {
  //     document.querySelectorAll("section").forEach(function (active) {
  //       let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
  //       if (
  //         active.getBoundingClientRect().top >= -400 &&
  //         active.getBoundingClientRect().top <= 150
  //       ) {
  //         active.classList.add("your-active-class");
  //         activeLink.classList.add("active-link");
  //       } else {
  //         active.classList.remove("your-active-class");
  //         activeLink.classList.remove("active-link");
  //       }
  //     });
  //   };
  // const {
  //   HeaderVariable,
  //   setHeaderVariable,
  //   FeatureVariable,
  //   setFeatureVariable,
  //   PresentationVariable,
  //   setPresentationVariable,
  //   AboutVariable,
  //   setAboutVariable,
  //   ContactVariable,
  //   setContactVariable,
  // } = { ...props };
  // console.log("PresentationVariable", props.PresentationVariable);
  console.log("props2", { ...props.props2 });
  //console.log("PresentationVariable", props2.props2.PresentationVariable);
  // console.log(props2);

  if (props.navbarMode === "Hardware") {
    return (
      <nav
        className={nav ? "active" : "nav"}
        // style={{ background: "white" }}
      >
        <Link to={"/"}>
          <a href="#" className="logo">
            <img src={logo}></img>
          </a>
        </Link>
        {/* <a href="#" className="logo">
          <img src={logo}></img>
        </a> */}
        <input type="checkbox" className="menu-btn" id="menu-btn"></input>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a
              href="#Z-wave"
              className={props.props2.zWaveVariable ? "active" : ""}
            >
              Z-Wave
            </a>
          </li>

          <li>
            <a
              href="#Security"
              className={props.props2.securityVariable ? "active" : ""}
            >
              Security
            </a>
          </li>

          <li>
            <a
              href="#Surveillance"
              className={props.props2.surveillanceVariable ? "active" : ""}
            >
              Surveillance
            </a>
          </li>

          <li>
            <a
              href="#Sensor_Array"
              className={props.props2.sensor_arrayVariable ? "active" : ""}
            >
              Sensor Array
            </a>
          </li>
          {!authUser && (
            <li>
              <Link
                to={"/Login"}
                // href="#login/SignUp"
                // className={props.PresentationVariable ? "active" : ""}
                // className={props2.PresentationVariable ? "active" : ""}
              >
                Login/Signup
              </Link>
            </li>
          )}
          <>
            {/* {props.extract("alex")} */}
            <AuthDetails extract={props.extract}></AuthDetails>
          </>
        </ul>
      </nav>
    );
  }

  if (props.navbarMode === "Software") {
    return (
      <nav
        className={nav ? "active" : "nav"}
        // style={{ background: "white" }}
      >
        <Link to={"/"}>
          <a href="#" className="logo">
            <img src={logo}></img>
          </a>
        </Link>
        {/* <a href="#" className="logo">
          <img src={logo}></img>
        </a> */}
        <input type="checkbox" className="menu-btn" id="menu-btn"></input>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#Ai" className={props.props2.AiVariable ? "active" : ""}>
              AI
            </a>
          </li>

          <li>
            <a
              href="#Mobile_Application"
              className={props.props2.MobileAppVariable ? "active" : ""}
            >
              Mobile Application
            </a>
          </li>

          <li>
            <a
              href="#Local_Processing"
              className={props.props2.local_processing_Variable ? "active" : ""}
            >
              Local Processing
            </a>
          </li>
          {!authUser && (
            <li>
              <Link
                to={"/Login"}
                // href="#login/SignUp"
                // className={props.PresentationVariable ? "active" : ""}
                // className={props2.PresentationVariable ? "active" : ""}
              >
                Login/Signup
              </Link>
            </li>
          )}

          <li>
            <a href="#">Download</a>
          </li>
          <>
            <AuthDetails extract={props.extract}></AuthDetails>
          </>
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={nav ? "active" : "nav"}
      // style={{ background: "white" }}
    >
      <Link to={"/"}>
        <a href="#" className="logo">
          <img src={logo}></img>
        </a>
      </Link>

      {/* <a href="#" className="logo">
        <img src={logo}></img>
      </a> */}
      <input type="checkbox" className="menu-btn" id="menu-btn"></input>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#" className={props.props2.HeaderVariable ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={props.props2.AboutVariable ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#VideoPlayer"
            className={props.props2.VideoVariable1 ? "active" : ""}
          >
            VideoPlayer
          </a>
        </li>

        <li>
          <a
            href="#features"
            className={props.props2.FeatureVariable ? "active" : ""}
          >
            Features
          </a>
        </li>

        <li>
          <a
            href="#presentation"
            // className={props.PresentationVariable ? "active" : ""}
            className={props.props2.PresentationVariable ? "active" : ""}
          >
            UI{" "}
          </a>
        </li>
        {!authUser && (
          <li>
            <Link
              to={"/Login"}
              // href="#login/SignUp"
              // className={props.PresentationVariable ? "active" : ""}
              // className={props2.PresentationVariable ? "active" : ""}
            >
              Login/Signup
            </Link>
          </li>
        )}
        <li>
          <a href="#">Download</a>
        </li>
        <>
          <AuthDetails extract={props.extract}></AuthDetails>
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
