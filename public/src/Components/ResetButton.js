import React from "react";

export class ResetButton extends React.Component{
  render(){
    return(
      <div>
        <button
          className = "reset button"
          onClick = {this.props.resetGame}
        >Reset</button>
      </div>
    )
  }
}
