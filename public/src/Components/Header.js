import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <div className = "heading">
        <h1>Play the Guessing Game!</h1>
        <h2>Guess a number between 1 and 100</h2>
      </div>
    )
  }
}
