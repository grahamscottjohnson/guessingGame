import React from "react";
import { ResetButton } from "./ResetButton.js";
import { HintButton } from "./HintButton.js";

export class OptionBox extends React.Component{
  render(){
    return(
      <div className = "optionBox">
        <ResetButton />
        <HintButton />
      </div>
    )
  }
}
