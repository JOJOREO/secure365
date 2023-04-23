// import React from "react";
import Navbar from "./Navbar";
import React, { forwardRef } from "react";

// const Header = ({ props }) => {
// const Header = ({ props2 }) => {
const myComponentStyle = {
  // margin: "100px",
  marginBottom: 100,
  // marginTop: 10,

  // padding: "150px",
};
const Header = forwardRef((props2, ref) => {
  return (
    <div id="main" ref={ref}>
      <div className="name" id="name" style={myComponentStyle}>
        <h1>
          Leave The Security of your House with Us
          <span> Secura 365</span> the Top Security System In The Middle East
        </h1>
        <p className="details">A product of AAST students</p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
});

export default Header;
