import React from "react";

export class HintButton extends React.Component{
  render(){
    return(
      <div>
        <button
          className = "hint button"
          onClick = {this.props.declareHint}
          disabled = {this.props.hasEnded}
          ref = {this.props.hintButtonRef}
        >Hint</button>
      </div>
    )
  }
}
