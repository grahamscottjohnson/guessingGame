import ReactDOM from "react-dom";
import React from "react";
// import { createStore } from "redux";
import { App } from "./Components/App.js"

ReactDOM.render(<App />, document.getElementById("root"));
//import reducer

// let reducer = (state, action) => {
//   if (!state){
//     return makeNewGame();
//   }
//   switch(action.type){
//     case "ADD":
//       let result = Object.create(state);
//       result.guesses.push(action.guess);
//       return result;
//     case "RESET":
//       return makeNewGame();
//   }
// };

// function makeNewGame(){
//   return {
//     answer: 100 * Math.ceil(Math.random()),
//     guesses: []
//   }
// }
// let store = createStore(reducer);
// function render(){
  //use store here


  //server.js needs to access this and be able to pass it the array
// }
// render();
// store.subscribe(render);

// module.exports = {
//   handleGuess(guess){
//     //TODO
//     console.log("test");
//   }
// }
