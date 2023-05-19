import React, { forwardRef } from "react";
import img from "../images/website_data/Ai.png";

const ReversedAbout = forwardRef((props2, ref) => {
  console.log("props2", { ...props2.props2 });

  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
  // console.log(props);
  const myComponentStyle = {
    // margin: "100px",
    marginBottom: 50,
    marginTop: 50,
    // width: "100%",
    // height: "100%",
    // display: "flex",
    // alignItems: "center",
    // justufyContent: "Center",
    // padding: "150px",

    // adjustment , rewrite from about id css
    marginTop: "100px",
    width: "100%",
    height: "110vh",
    backgroundColor: "#f3fdff",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    /* padding: 50px 5% 0px 5%; */
    padding: "0px 5% 0px 5%",
    position: "relative",
    scrollBehavior: "smooth",
    backgroundImage: "url(`./images/trial_pics/background2.png`)",
  };
  const SpecialComponentsStyle = {
    width: "60px",
    width: "50%",
    marginLeft: "20%",
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
    <div
      id={
        props2.props2.specialComponent
          ? `${props2.title.split(" ").join("_")}`
          : "about"
      }
      className={!props2.new ? "" : props2.title}
      style={myComponentStyle}
    >
      <div className="about-text">
        <h2>{props2.title}</h2>
        {/* <p>
          The need for reliable and secure surveillance systems for monitoring
          homes and valuable goods is becoming increasingly important in today's
          world.
        </p> */}
        {props2.new && <p></p>}
        {!props2.new && (
          <p>
            The need for reliable and secure surveillance systems for monitoring
            homes and valuable goods is becoming increasingly important in
            today's world. Many traditional surveillance systems are complex to
            use and lack the ability to monitor and control the system remotely.
            Additionally, many systems are not equipped with advanced features
            such as biometric security, night vision, and home automation
            capabilities. The solution is to create a surveillance system that
            is easy to use, provides remote monitoring and control capabilities,
            and incorporates advanced features to ensure the security of users'
            homes and valuable goods.
          </p>
        )}
        {props2.new && (
          <ul>
            {props2.LiContent &&
              props2.LiContent.map((i) => {
                if (i != "") return <li key={i} style={liStyle}>{`${i}`}</li>;
              })}
            {/* <li style={liStyle}>a</li>
            <li style={liStyle}>a</li>
            <li style={liStyle}>a</li> */}
          </ul>
        )}
        {/* <button>{props2.button}</button> */}
      </div>
      <div className="about-image">
        <img src={props2.image} style={SpecialComponentsStyle} alt=""></img>
      </div>
      <div ref={ref}></div>
    </div>
  );
});

export default ReversedAbout;
