import React from "react";
import ScoreDiv from "./ScoreDiv"

function Container (props){
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}
  <ScoreDiv /></div>;

}

export default Container