import React from "react";

export class GuessList extends React.Component{
  render(){
    let presentation = [];
    for (let i = 0; i < 5; i += 1){
      let guess = this.props.guesses[i] || "-";
      presentation.push(guess)
    }
    return(
      <div className = "list-holder">
        <ul className = "list-wrapper">
          {presentation.map( (guess) => {
            return <li className="list-item">{guess}</li>
          })}
        </ul>
      </div>
    )
  }
}
