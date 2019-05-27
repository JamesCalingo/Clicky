import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game"
import GameImage from "./components/Images/GameImage"
import friends from './friends.json';
import ScoreDiv from "./components/ScoreDiv"



class App extends React.Component {
  state = {
    friendlist: friends,
    id: friends.id,
    clicked: undefined,
    score: 0,
    highScore: 0
  };
 
handleClick = (friendID) =>{
  const clickedFriend = this.state.friendlist.filter(friend => {
    return friend.id === friendID
  })
  
  this.setState({
    clicked: true,
    id: clickedFriend,
    score: this.state.score + 1
  });
 

  if(this.state.score === this.state.friendlist.length){
    alert("You win!");
    this.setState({
      clicked: false,
      score: 0,
    })
  }
  else if(this.state.clicked === true){
    alert("BOOM")
    this.setState({
      clicked: false,
      score: 0
    })
}
}


  render() {
    return (
      <div>
      <Jumbotron />
      <ScoreDiv score={this.state.score} highScore={this.state.highScore}/>
      <Game>
        {this.state.friendlist.map(friend =>{
          return(
            <GameImage key={friend.id}
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
