import React from "react";
import ScoreDiv from "./ScoreDiv"

function Container (props){
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>
  <ScoreDiv /></div>;

}

export default Container