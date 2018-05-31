import React from "react";
import { Footer } from "./Footer.js";
import { GameContainer } from "./GameContainer.js";

export class App extends React.Component{
  render(){
    return(
      <div>
        <GameContainer />
        <Footer />
      </div>
    )
  }
}
