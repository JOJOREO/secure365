// import React from "react";
import React, { forwardRef, useState } from "react";

import { useRef } from "react";
import ReactPlayer from "react-player";
import Localvidsrc from "../images/WhatsApp Video 2023-04-22 at 7.10.07 AM.mp4";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
const VideoPlayer = forwardRef((props, ref) => {
  const myComponentStyle = {
    // margin: "100px",
    marginBottom: 50,
    marginTop: 50,
    // padding: "150px",
  };
  let myVideo = document.getElementById("localVid");
  function playPause() {
    console.log("on");
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  }

  const playerRef = useRef(null);
  return (
    <div
      id="VideoPlayer"
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: "#00b7ff",
        width: "100%",
        height: "768px",
      }}
    >
      {/* <button type="button" onclick={playPause()}>
        Play/Pause
      </button> */}
      {/* <video id="localVid" src={Localvidsrc} autoPlay loop muted></video> */}
      {/* loop , autoplay */}
      <video id="localVid" src={Localvidsrc} autoPlay muted></video>
      {/* <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} /> */}
      {/* <ReactPlayer
        ref={playerRef}
        url={Localvidsrc}
        style={{ width: "100%", height: "100%" }}
        controls={true}
      /> */}
    </div>
  );
});

export default VideoPlayer;
