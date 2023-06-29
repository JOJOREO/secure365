import React from "react";
import Header from "../Components/Header";
import About from "../Components/about";
import aboutImage from "../images/trial_pics/Frame 19.png";
import Navbar from "../Components/Navbar";
import ReversedAbout from "../Components/ReversedAbout";
//use in view hook aka new way

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useRef } from "react";

import featureimage from "../images/website_data/z-wave-plus-vector-logo.svg";
import featureimage2 from "../images/vector_imgs/Security.svg";
import featureimage3 from "../images/vector_imgs/Surveillance.svg";
import featureimage4 from "../images/vector_imgs/Sensor_array.svg";
import featureimage5 from "../images/vector_imgs/Ai.svg";
import featureimage6 from "../images/vector_imgs/mobile-App.svg";
import featureimage7 from "../images/vector_imgs/local_processing.svg";

import Real_image_Sensor_array from "../images/photos_from_7oda/Sensor Array.jpg";
import Real_image_Camera from "../images/photos_from_7oda/Camera.jpg";
import Real_image_Lock from "../images/photos_from_7oda/Lock.jpg";

const Hardware = () => {
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
    // LiContent: [""],
  };
  const sstyle = {
    backgroundImage: "url(`./images/trial_pics/background2.png`)",
  };
  return (
    <div className="App">
      <Navbar
        navbarMode={"Hardware"}
        //  props={props}
        props2={props2}
      />
      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        new={true}
        ref={zWaveVariableRef}
        image={featureimage}
        liImg={featureimage}
        title="Z-wave"
        button="Get The App"
        LiContent={[
          "Doesnt interfere with Common Frequencies",
          "High Data Transfer Rate",
          "High range",
          "Low Power Consumption",
        ]}
      />
      <ReversedAbout
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={securityVariableRef}
        image={Real_image_Lock}
        liImg={featureimage2}
        title="Security"
        button="Get The App"
        new={true}
        LiContent={[
          "Fingerprint Lock",
          "NfC Layer ",
          "Tamper Proof Locking Mechanism",
        ]}
      />
      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        new={true}
        ref={surveillanceVariableRef}
        image={Real_image_Camera}
        liImg={featureimage3}
        title="Surveillance"
        button="Get The App"
        LiContent={["High Quality Video Feed", "PTZ Motion", "Night Vision"]}
      />
      <ReversedAbout
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={sensor_arrayVariableRef}
        image={Real_image_Sensor_array}
        liImg={featureimage4}
        title="Sensor Array"
        button="Get The App"
        new={true}
        LiContent={[
          "Include Sensors for 180° Motion Detection",
          "Can Include Different Sensor Arrays Which Come in Different Configurations",
          "Highly Compatible With The System",
        ]}
      />
    </div>
  );
};

export default Hardware;
