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

import featureimage2 from "../images/website_data/Security.png";
import featureimage3 from "../images/website_data/Surveillance.png";
import featureimage4 from "../images/website_data/Sensor_array.png";
import featureimage5 from "../images/website_data/Ai.png";
import featureimage6 from "../images/website_data/mobile App.png";
import featureimage7 from "../images/website_data/local_processing.png";

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

  const props2 = {
    HeaderVariable,
    FeatureVariable,
    PresentationVariable,
    AboutVariable,
    VideoVariable1,
    VideoVariable2,
    FoundersVariable,
  };
  return (
    <div className="App">
      <Navbar
        //  props={props}
        props2={props2}
      />
      {/* <Header
        props2={props2}
        ref={HeaderVariableRef}
        //  props={props}
      ></Header> */}
      {/* <VideoPlayer
        //  props={props}
        // VideoVariable={VideoVariable}
        props2={props2}
        ref={VideoVariable1Ref}
      />
      <Feature
        // props2={props2}
        FeatureVariable={FeatureVariable}
        ref={FeatureVariableRef}
      /> */}

      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        new={true}
        ref={AboutVariableRef}
        image={aboutImage}
        liImg={featureimage7}
        title="Comes With All You Need TO Secure Your House"
        button="Get The App"
      />
      <ReversedAbout
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={AboutVariableRef}
        image={aboutImage}
        liImg={featureimage6}
        title="Comes With All You Need TO Secure Your House"
        button="Get The App"
      />
      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        new={true}
        ref={AboutVariableRef}
        image={aboutImage}
        liImg={featureimage7}
        title="Comes With All You Need TO Secure Your House"
        button="Get The App"
      />
      <ReversedAbout
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={AboutVariableRef}
        image={aboutImage}
        liImg={featureimage6}
        title="Comes With All You Need TO Secure Your House"
        button="Get The App"
      />
      {/* <Presentation
        // props={props}
        PresentationVariable={PresentationVariable}
        ref={myPresentationVariableRef}
      ></Presentation> */}
      {/* <About
        // props={props}
        // AboutVariable={AboutVariable}
        // setAboutVariable={setAboutVariable}
        // PresentationVariable={PresentationVariable}
        ref={AboutVariableRef}
        image={aboutImage2}
        title="Download And get the App Now"
        button="Download"
      /> */}
      {/*  */}
      {/* <VideoPlayer
        //  props={props}
        // VideoVariable={VideoVariable}
        props2={props2}
        ref={VideoVariable1Ref}
      /> */}

      {/* ai ,  */}

      {/* <Founders /> */}
      {/* <img_with_animations />
      <Contact
      // props={props}
      // ref={ref}
      // ContactVariable={ContactVariable}
      // setContactVariable={setContactVariable}
      ></Contact> */}
    </div>
  );
};

export default Software;
