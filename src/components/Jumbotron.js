import React from "react";

function Jumbotron () {
  return(
    <div className="jumbotron bg-danger text-light pb-1 pt-1">
    <h1>Click on things! But only once...ONCE! </h1>
    <p>Welcome to the clicking game!<br />You're going to see a bunch of images down below. To win, click on each of them once.<br />Easy, right?</p>
    <h4>Guess again.</h4>
    <p>The images are going to shuffle around after you click on them, and if you click on any image more than once, then BOOM! Game over.</p>
    <h2>Good luck!</h2>
    </div>
  )
}

export default Jumbotron