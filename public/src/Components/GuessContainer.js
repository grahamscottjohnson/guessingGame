import React from "react";

export class GuessContainer extends React.Component{
  //I realize now that this shouldn't send info to the server, the client can handle this
  //but I wanted to practice post requests, so im doing it anyway. // Except I'm not
  render(){
    return(
      <div className = "GuessContainer">
        <form action = "/guesses/add" method = "POST">
          <input
            className = "guess-input"
            ref = {this.props.guessInputRef}
            placeholder = "#"
            maxLength = "3"
            name = "guess"
            autoFocus="autofocus"
          />
          <input className = "submit button" type = "submit" value = "Guess" />
        </form>
      </div>
    )
  }
}
