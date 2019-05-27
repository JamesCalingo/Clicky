import React from "react";
import "./style.css";

function GameImage(props) {
  return (
   <div className="card" onClick={props.handleClick}>
   <div className="card-body">
      <div className="img-fluid img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </div>
      </div>
    
  );
}

export default GameImage;
