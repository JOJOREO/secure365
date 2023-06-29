// import React from "react";
import Navbar from "./Navbar";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

// const Header = ({ props }) => {
// const Header = ({ props2 }) => {
const MyContext = React.createContext();
const myComponentStyle = {
  // margin: "100px",
  marginBottom: 100,
  // marginTop: 10,

  // padding: "150px",
};
const Header = forwardRef((props2, ref) => {
  // const { props3 } = props2;
  // console.log(props3);
  return (
    <div
      id="main"
      // ref={ref}
    >
      <div className="name" id="name" style={myComponentStyle}>
        <h1>
          Leave The Security of your House with Us
          <span> Secura 365</span> the Top Security System In The Middle East
        </h1>
        <p className="details">A product of AAST students</p>
        {/* <Link to={"/Profile"}>
          <a href="#" className="cv-btn">
            Download
          </a>
        </Link> */}
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
      <div ref={ref}></div>
    </div>
  );
});

export default Header;
