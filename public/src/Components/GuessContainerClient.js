import React from "react";

export class GuessContainer extends React.Component{
  constructor(props){
    super(props);
    //needed to make "this" work
    //this.handleGuessSubmit = this.props.handleGuessSubmit.bind(this);
  }
  render(){
    return(
      <div className = "GuessContainer">
        <input
          id = "guess-input"
          className = "guess-input"
          refs = "guessInput"
          placeholder = "#"
          maxLength = "3"
          name = "guess"
          autoFocus= "autofocus"
          disabled = {this.props.hasEnded}
          ref = {this.props.guessInputRef}
        />
        <button className = "submit button"
          ref = "guessButton"
          onClick = {this.props.handleGuessSubmit}
          disabled = {this.props.hasEnded}
        >Guess</button>
      </div>
    )
  }
}
