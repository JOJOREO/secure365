import React, { forwardRef } from "react";
// import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { createContext, useRef, useEffect } from "react";
import Navbar from "./Navbar";

const myComponentStyle = {
  // margin: "100px",
  // marginBottom: 50,
  // marginTop: 50,
  marginBottom: 0,
  marginTop: "1%",

  // backgroundImage: "url(`./images//trial_pics/background2.png`)",
  // padding: "150px",
};

// const NameVar = createContext();
// const Presentation = forwardRef((props, ref) => {
const Presentation = forwardRef((PresentationVariable, ref) => {
  // const { PresentationVariable, setPresentationVariable } = props;
  return (
    <div
      id="presentation"
      // ref={ref}
      style={myComponentStyle}
    >
      <h1 style={{ color: "#00b7ff" }}>UI presentation</h1>
      <p>
        User friendly mobile application that doesnt shock the user with too
        much information.
      </p>
      <div ref={ref}></div>
    </div>
  );
});

export default Presentation;
// export { NameVar };
