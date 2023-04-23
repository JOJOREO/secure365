import React, { forwardRef } from "react";
// import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { createContext, useRef, useEffect } from "react";
import Navbar from "./Navbar";

const myComponentStyle = {
  // margin: "100px",
  marginBottom: 50,
  marginTop: 50,
  // padding: "150px",
};

// const NameVar = createContext();
// const Presentation = forwardRef((props, ref) => {
const Presentation = forwardRef((PresentationVariable, ref) => {
  // const { PresentationVariable, setPresentationVariable } = props;
  return (
    <div id="presentation" ref={ref} style={myComponentStyle}>
      <h1>UI presentation</h1>
      <p>
        User friendly mobile application that doesnt shock the user with too
        much information.
      </p>
    </div>
  );
});

export default Presentation;
// export { NameVar };
