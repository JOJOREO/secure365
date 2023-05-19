import React from "react";
import Header from "../Components/Header";
// import Feature from "./Components/Feature";
import About from "../Components/about";
import ReversedAbout from "../Components/ReversedAbout";
// import Contact from "./Components/Contact";
// import Presentation from "./Components/presentation";
import aboutImage from "../images/trial_pics/Frame 19.png";
// import aboutImage2 from "./images/trial_pics/download.png";
// import VideoPlayer from "./Components/VideoPlayer";
import Navbar from "../Components/Navbar";
//use in view hook aka new way

import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";

// import { useInView } from "react-intersection-observer";
import { useRef } from "react";
// import Founders from "./Components/Founders";

import featureimage2 from "../images/vector_imgs/Security.svg";
import featureimage3 from "../images/vector_imgs/Surveillance.svg";
import featureimage4 from "../images/vector_imgs/Sensor_array.svg";
import featureimage5 from "../images/vector_imgs/Ai.svg";
import featureimage6 from "../images/vector_imgs/mobile-App.svg";
import featureimage7 from "../images/vector_imgs/local_processing.svg";

const Software = () => {
  const { ref: HeaderVariableRef, inView: HeaderVariable } = useInView();

  const { ref: FeatureVariableRef, inView: FeatureVariable } = useInView();

  const { ref: myPresentationVariableRef, inView: PresentationVariable } =
    useInView();

  const { ref: AboutVariableRef, inView: AboutVariable } = useInView();

  const { ref: AboutVariableRef2, inView: AboutVariable2 } = useInView(); //not necessary optional + no navabr li

  const { ref: VideoVariable1Ref, inView: VideoVariable1 } = useInView(); //not necessary optional + no navabr li

  const { ref: VideoVariable2Ref, inView: VideoVariable2 } = useInView(); //not necessary optional + no navabr li
  const { ref: FoundersVariableRef, inView: FoundersVariable } = useInView(); //not necessary optional + no navabr li

  // hardware
  const { ref: zWaveVariableRef, inView: zWaveVariable } = useInView(); //not necessary optional + no navabr li
  const { ref: securityVariableRef, inView: securityVariable } = useInView(); //not necessary optional + no navabr li
  const { ref: surveillanceVariableRef, inView: surveillanceVariable } =
    useInView(); //not necessary optional + no navabr li
  const { ref: sensor_arrayVariableRef, inView: sensor_arrayVariable } =
    useInView(); //not necessary optional + no navabr li

  // software
  const { ref: AiVariableRef, inView: AiVariable } = useInView(); //not necessary optional + no navabr li
  const { ref: MobileAppVariableRef, inView: MobileAppVariable } = useInView(); //not necessary optional + no navabr li
  const {
    ref: local_processing_VariableRef,
    inView: local_processing_Variable,
  } = useInView(); //not necessary optional + no navabr li

  const props2 = {
    HeaderVariable,
    FeatureVariable,
    PresentationVariable,
    AboutVariable,
    VideoVariable1,
    VideoVariable2,
    FoundersVariable,
    zWaveVariable,
    securityVariable,
    surveillanceVariable,
    sensor_arrayVariable,
    AiVariable,
    MobileAppVariable,
    local_processing_Variable,
    specialComponent: true,
  };
  return (
    <div className="App">
      <Navbar
        navbarMode={"Software"}
        //  props={props}
        props2={props2}
      />
      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        new={true}
        ref={AiVariableRef}
        image={featureimage5}
        liImg={featureimage5}
        title="Ai"
        button="Get The App"
        LiContent={[
          "High Speed ",
          "High detection Accuracy",
          "Better Generlization",
          "Open Source",
        ]}
      />
      <ReversedAbout
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={MobileAppVariableRef}
        image={featureimage6}
        liImg={featureimage6}
        title="Mobile Application"
        button="Get The App"
        new={true}
        LiContent={[
          "Cross Platform ",
          "User Friendly",
          "Control Smart Security System from anywhere",
        ]}
      />
      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={local_processing_VariableRef}
        image={featureimage7}
        liImg={featureimage7}
        title="Local Processing"
        button="Get The App"
        new={true}
        LiContent={[
          "No Transfer of User Data all Over the internet ( Avoid Cloud Stigma) ",
          "No Data Breach ",
        ]}
      />
    </div>
  );
};

export default Software;
