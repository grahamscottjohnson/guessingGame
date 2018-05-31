import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header.js";
import { GuessContainer } from "./GuessContainerClient.js";
import { GuessList } from "./GuessList.js";
import { ResetButton } from "./ResetButton.js"
import { HintButton } from "./HintButton.js"
let guessingGame = require("../GuessingGame.js");

export class GameContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = this.generateGame();
    this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.declareHint = this.declareHint.bind(this);
    this.hintButtonRef = React.createRef();
    this.guessInputRef = React.createRef();
  }
  setHeaderSubtitle(){
    if (this.state.game.playersGuess !== null){
      this.setState({
        headerSubtitle: this.state.game.hasEnded ?
          "The number was " + this.state.game.winningNumber :
          this.state.game.isLower() ? "Guess Higher!" : "Guess Lower!"
      })
    }
  }
  handleGuessSubmit(){
    // let item = document.getElementById("guess-input"); //awkward
    console.log( this.guessInputRef, this.guessInputRef.current )
    let item = this.guessInputRef.current;
    //let item = $("this").prev()
    this.setState({
      headerTitle: this.state.game.playersGuessSubmission(item.value)
    })
    console.log(this.state.game.playersGuess, this.state.game.winningNumber);
    this.setHeaderSubtitle();
    item.value = "";
  }
  generateGame(){
    return {
      game: guessingGame.newGame(),
      headerTitle: defaultTitle(),
      headerSubtitle: defaultSubtitle()
    }
  }
  resetGame(){
    this.setState(this.generateGame());
    this.hintButtonRef.current.disabled = false;
  }
  declareHint(){
    let ans = this.state.game.provideHint();
    this.setState({
      headerTitle: `The winning number is ${ans[0]}, ${ans[1]}, or ${ans[2]}`
    });
    console.log(this.hintButtonRef, this.hintButtonRef.current);
    this.hintButtonRef.current.disabled = true;
  }
  render(){
    return (
      <div className = "holder">
        <Header
          title = {this.state.headerTitle}
          subtitle = {this.state.headerSubtitle}
        />
        <GuessContainer
          hasEnded = {this.state.game.hasEnded}
          handleGuessSubmit = {this.handleGuessSubmit}
          guessInputRef = {this.guessInputRef}
        />
        <GuessList
          guesses = {this.state.game.pastGuesses}
        />
        <div className = "optionBox">
          <ResetButton resetGame = {this.resetGame}/>
          <HintButton
            declareHint = {this.declareHint}
            hasEnded = {this.state.hasEnded}
            hintButtonRef = {this.hintButtonRef}
          />
        </div>
      </div>
    )
  }
}
function defaultTitle(){ return "Play the Guessing Game!"}
function defaultSubtitle(){ return "Guess a number between 1 and 100"}
// function once( fn ){
//   let hasBeenCalled = false;
//   return () => {
//     if ( !hasBeenCalled ){
//       fn.apply(null, arguments);
//       hasBeenCalled = true;
//     }
//   }
// }