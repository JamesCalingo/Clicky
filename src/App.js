import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game/Game"
import GameImage from "./components/Images/GameImage"
import friends from './friends.json';
import ScoreDiv from "./components/ScoreDiv"
import swal from "@sweetalert/with-react"



class App extends React.Component {
  state = {
    friendlist: friends,
    score: 0,
    highScore: 0,
  };

  componentDidMount(){
    swal(
      <div><p>Welcome to the clicking game!<br />You're going to see a bunch of images down below. To win, click on each of them once.<br />Easy, right?</p>
      <h4>Guess again.</h4>
      <p>The images are going to shuffle around after you click on them, and if you click on any image more than once, then BOOM! Game over.</p>
      <h2>Good luck!</h2></div>
    )
  }
 
handleClick = (friendID) =>{
  const friendsTwo = [...this.state.friendlist]
  // const clickedFriend = this.state.friendlist.filter(friend => {
  //   return friend.id === friendID
  // })
  // console.log(clickedFriend)
 
var isCorrect = false

  friendsTwo.forEach(friend => {
    if(friend.id === friendID){
      if(!friend.clicked){
        isCorrect = true
        friend.clicked = true
      }
    }

  })
if(isCorrect){
  this.setState({
    score: this.state.score + 1,
    friendlist: this.state.friendlist.sort(() => 0.5 - Math.random())
  });
}
  else{
    
    friendsTwo.forEach(friend =>{
      friend.clicked = false
    })
    this.setState({
      score: 0,
      friendlist: this.state.friendlist.sort(() => 0.5 - Math.random())
    })
    swal(
      <div>
        <h1>Game over!</h1>
      <p>Try again, but remember: click on each image only ONCE!
        </p>
      </div>
    )
  }

  if(this.state.score === this.state.friendlist.length){
    swal(<div>
      <h1>You win!</h1>
    </div>);
    this.setState({
      clicked: false,
      score: 0,
    })
  }

if(this.state.score >= this.state.highScore){
  this.setState({
    highScore: this.state.score
  })
}

  if(this.state.clicked === true){
    alert("BOOM")
    this.setState({
      clicked: false,
      score: 0
    })
}
}

/* SHUFFLE CARDS */
shuffleCards = () => {
  const shuffledFriendList = this.state.friendList.sort(() => 0.5 - Math.random());

  this.setState({
    friendList: shuffledFriendList
  });
};

  render() {
    return (
      <div>
      <Jumbotron />
      <ScoreDiv score={this.state.score} highScore={this.state.highScore}/>
      <Game>
        {this.state.friendlist.map(friend =>{
          return(
            <GameImage key={friend.id}
            id={friend.id}
            image={friend.image}
            handleClick={this.handleClick}
            shuffleCards={this.shuffleCards}
            
            />
          )
        })}
      </Game>

      </div>
    );
  }
}


export default App;
