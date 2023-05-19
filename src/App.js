import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/about";
import Contact from "./Components/Contact";
import Presentation from "./Components/presentation";
import aboutImage from "./images/trial_pics/Frame 19.png";
import aboutImage2 from "./images/trial_pics/download.png";
import VideoPlayer from "./Components/VideoPlayer";
import Navbar from "./Components/Navbar";
//use in view hook aka new way

import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";

// import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Founders from "./Components/Founders";

function App() {
  // const passer = useEffect(() => {}, []);
  //new way

  // const [HeaderVariable, setHeaderVariable] = useState(false);
  // const [FeatureVariable, setFeatureVariable] = useState(false);
  // const [PresentationVariable, setPresentationVariable] = useState(false);
  // const [AboutVariable, setAboutVariable] = useState(false);
  // const [ContactVariable, setContactVariable] = useState(false);
  // const [VideoVariable, setVideoVariable] = useState(false);

  //props passing to pass all the usestate hooks {aka props drilling} aka passing variable from parent throught several layered children
  // const props = {
  //   HeaderVariable,
  //   setHeaderVariable,
  //   FeatureVariable,
  //   setFeatureVariable,
  //   PresentationVariable,
  //   setPresentationVariable,
  //   AboutVariable,
  //   setAboutVariable,
  //   ContactVariable,
  //   setContactVariable,
  // };

  //old manual way

  //old manual way
  // const myRef = useRef();

  // useEffect(() => {
  //   //console.log("My Ref", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log("entry : ", entry);
  //     console.log("isIntersecting ", entry.isIntersecting);

  //     setPresentationVariable(entry.isIntersecting);
  //     console.log("presentation ", PresentationVariable);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  // end of old manual way
  //new automatic way

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
    specialComponent: false,
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(`./images/trial_pics/background2.png`)",
      }}
    >
      <Navbar
        //  props={props}
        props2={props2}
      />
      <Header
        props2={props2}
        ref={HeaderVariableRef}
        //  props={props}
      ></Header>
      <VideoPlayer
        //  props={props}
        // VideoVariable={VideoVariable}
        props2={props2}
        ref={VideoVariable1Ref}
      />
      <Feature
        // props2={props2}
        FeatureVariable={FeatureVariable}
        ref={FeatureVariableRef}
      />

      <About
        // props={props}
        // AboutVariable={AboutVariable}
        props2={props2}
        ref={AboutVariableRef}
        image={aboutImage}
        title="Comes With All You Need TO Secure Your House"
        button="Get The App"
      />
      <Presentation
        // props={props}
        PresentationVariable={PresentationVariable}
        ref={myPresentationVariableRef}
      ></Presentation>
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

      <Founders />
      <img_with_animations />
      <Contact
      // props={props}
      // ref={ref}
      // ContactVariable={ContactVariable}
      // setContactVariable={setContactVariable}
      ></Contact>
    </div>
  );
}

export default App;
