import React from "react";

export class GuessContainer extends React.Component{
  render(){
    return(
      <div className = "GuessContainer">
        <form action = "/guesses/add" method = "POST">
          <input className = "guess-input" placeholder = "#" maxlength = "3" name = "guess" autofocus="autofocus"/>
          <input className = "submit button" type = "submit" value = "Guess" />
        </form>
      </div>
    )
  }
}
