// import React from "react";
import FeatureBox from "./FeatureBox";
// import featureimage from "../images/trial_pics/feature_1.png";
// import featureimage2 from "../images/trial_pics/feature_2.png";
// import featureimage3 from "../images/trial_pics/feature_3.png";
import featureimage from "../images/website_data/z-wave-plus-vector-logo.png";
import React, { forwardRef } from "react";
import featureimage2 from "../images/website_data/Security.png";
import featureimage3 from "../images/website_data/Surveillance.png";
import featureimage4 from "../images/website_data/Sensor_array.png";
import featureimage5 from "../images/website_data/Ai.png";
import featureimage6 from "../images/website_data/mobile App.png";
import featureimage7 from "../images/website_data/local_processing.png";
const myComponentStyle = {
  // margin: "100px",
  marginBottom: 50,
  marginTop: 50,
  // padding: "150px",
};
const h2Style = {};
// const Feature = () => {
const Feature = forwardRef((FeatureVariable, ref) => {
  return (
    <div id="features" style={myComponentStyle} ref={ref}>
      <h1 style={{ color: "#00b7ff" }}>Hardware</h1>
      <div className="a-container">
        {/* <h1>Software </h1> */}
        <FeatureBox
          image={featureimage}
          title="Z-Wave"
          description="Main Control Hub"
        />
        <FeatureBox
          image={featureimage2}
          title="Security"
          description="Reliable security through locking system"
        />
        <FeatureBox
          image={featureimage3}
          title="Surveillance"
          description="Camera module with PTZ locking system"
        />
        <FeatureBox
          image={featureimage4}
          title="Sensor array"
          description="Multiple configurations sensor array"
        />
      </div>
      {/* <br></br>
      <br></br> */}

      <h1
        style={{
          background: "-webkit-linear-gradient( #09009f, #00b7ff )",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
        }}
      >
        Software
      </h1>

      <div className="a-container" ref={ref}>
        {/* <h1>Software </h1> */}
        <FeatureBox
          image={featureimage5}
          title=" AI "
          description="Human Detection AI"
        />
        <FeatureBox
          image={featureimage6}
          title="Mobile Application"
          description="Multiplatform mobile application and main user interface"
        />
        <FeatureBox
          image={featureimage7}
          title="On Premise Processing"
          description="Data And Footage is Processed Locally On The Hub For Maximum security"
        />
      </div>
    </div>
  );
});

export default Feature;
