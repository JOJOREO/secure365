import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
  // console.log(props);
  const myComponentStyle = {
    // margin: "100px",
    marginBottom: 50,
    marginTop: 50,
    // padding: "150px",
  };
  return (
    <div id="about" ref={ref} style={myComponentStyle}>
      <div className="about-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          The need for reliable and secure surveillance systems for monitoring
          homes and valuable goods is becoming increasingly important in today's
          world. Many traditional surveillance systems are complex to use and
          lack the ability to monitor and control the system remotely.
          Additionally, many systems are not equipped with advanced features
          such as biometric security, night vision, and home automation
          capabilities. The solution is to create a surveillance system that is
          easy to use, provides remote monitoring and control capabilities, and
          incorporates advanced features to ensure the security of users' homes
          and valuable goods.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
});

export default About;
