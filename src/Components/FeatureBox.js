import React from "react";

const FeatureBox = (props) => {
  return (
    <div className={`a-box ${props.hierarchy == true ? "founders" : ""}`}>
      <div className="a-b-img">
        <img src={props.image}></img>
      </div>
      <div
        className="s-b-text"
        style={{
          scrollbarWidth: "none",
          scrollbarColor: "red",
          overflow: "none",
        }}
      >
        <h2>{props.title}</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere
          unde aut! Repellendus porro minima in possimus repellat temporibus
          laborum sapiente, commodi tempora nam dolorum maxime cumque dolore
          dolor maiores?
        </p> */}
        <p
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            // scrollbarColor: "red",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBox;
