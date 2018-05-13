import React from "react";
import { Header } from "./Header.js";
import { GuessContainer } from "./GuessContainer.js";
import { GuessList } from "./GuessList.js";
import { Footer } from "./Footer.js";
import { OptionBox } from "./OptionBox.js"
let guessingGame = require("../GuessingGame.js");

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game: guessingGame.newGame(),
    }
  }
  render(){
    return (
      <div className = "holder">
      {//Header
      }
        <Header />
        {//Guess input and submit
        }
        <GuessContainer />
      {  //list of previous guesses
      }
        <GuessList guesses = {this.state.game.pastGuesses}/>
        <OptionBox />
      { //Footer
      }
        <Footer message = "Made by Graham Johnson"/>
      </div>
    )
  }
}
