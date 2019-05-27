import React from "react";

function ScoreDiv(props){
  return(
  
  <h5 className="text-center">Current Score: {props.score} High Score: {props.highScore}</h5>
  
  )
}

export default ScoreDiv