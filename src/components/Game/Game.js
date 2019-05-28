import React from "react";
import "./style.css"

function Game(props){
  return(
    <div className="container">
    <div className="game">{props.children}</div>
    </div>
  )
}

export default Game
