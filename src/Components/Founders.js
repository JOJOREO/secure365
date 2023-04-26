// import React from "react";
import FeatureBox from "./FeatureBox";
// import featureimage from "../images/trial_pics/feature_1.png";
// import featureimage2 from "../images/trial_pics/feature_2.png";
// import featureimage3 from "../images/trial_pics/feature_3.png";
import React, { forwardRef } from "react";
import founderimage from "../images/team_members/7oda.jpeg";
import founderimage2 from "../images/team_members/Joe fathy.jpeg";
import founderimage3 from "../images/team_members/Joe Hatem.jpeg";
import founderimage4 from "../images/team_members/Komos.jpeg";
import founderimage5 from "../images/team_members/Walid.jpeg";
const myComponentStyle = {
  // margin: "100px",
  marginBottom: 50,
  marginTop: 50,
  // padding: "150px",
};

const Founders = forwardRef((FeatureVariable, ref) => {
  return (
    <div id="features" style={myComponentStyle}>
      <div className="a-container" ref={ref}>
        {/* <h1>Software </h1> */}
        <FeatureBox
          hierarchy={true}
          image={founderimage}
          title="Mahmoud Mohamed"
          description="Team Leader /Hardware Lead"
        />
        <FeatureBox
          hierarchy={true}
          image={founderimage2}
          title="Youssef Fathi"
          description="Protocols Expert/Hardware"
        />
        <a href="https://github.com/JOJOREO" target="blank">
          <FeatureBox
            hierarchy={true}
            image={founderimage3}
            title="Youssef Hatem"
            description="Software / Hardware"
          />
        </a>
      </div>
      <div className="a-container" ref={ref}>
        {/* <h1>Software </h1> */}
        <FeatureBox
          hierarchy={true}
          image={founderimage4}
          title=" Mohammed Komsany"
          description="Software Lead / Business Manager"
        />
        <a href="https://github.com/walidkamal12" target="blank">
          <FeatureBox
            hierarchy={true}
            image={founderimage5}
            title="Walid Kamal"
            description="Ai Engineer/ Hardware"
          />
        </a>
      </div>
    </div>
  );
});

export default Founders;
