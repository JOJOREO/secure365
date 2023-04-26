import React, { forwardRef } from "react";
import img from "../images/website_data/Ai.png";
const ReversedAbout = forwardRef((props2, ref) => {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
  // console.log(props);
  const myComponentStyle = {
    // margin: "100px",
    marginBottom: 50,
    marginTop: 50,
    // padding: "150px",
  };
  const liStyle = {
    listStyle: "none",
    padding: "10px 30px",
    backgroundImage: `url(${props2.liImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "20px",
  };
  return (
    <div id="about" ref={ref} style={myComponentStyle}>
      <div className="about-text">
        <h2>{props2.title}</h2>
        <p>
          The need for reliable and secure surveillance systems for monitoring
          homes and valuable goods is becoming increasingly important in today's
          world.
        </p>
        <ul>
          <li style={liStyle}>a</li>
          <li style={liStyle}>a</li>
          <li style={liStyle}>a</li>
        </ul>
        <button>{props2.button}</button>
      </div>
      <div className="about-image">
        <img src={props2.image} alt=""></img>
      </div>
    </div>
  );
});

export default ReversedAbout;
