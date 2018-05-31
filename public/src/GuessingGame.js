function generateWinningNumber(){
  return Math.floor(100 * Math.random()) + 1;
}
function shuffle(array){
  for (let i = 0; i < array.length; i += 1){
    //pick a random value in the array
    let newIndex = Math.floor((array.length - i ) * Math.random());
    //swap it with "last" element
    let temp = array[newIndex];
    array[newIndex] = array[array.length - 1 - i]; //- i because we've already sorted the last i things
    array[array.length - 1 - i] = temp;
  }
  return array;
}
function Game(){
  this.winningNumber = generateWinningNumber();
  this.playersGuess = null;
  this.pastGuesses = [];
  this.hasEnded = false;
}
Game.prototype.difference = function(){
  return Math.abs(this.playersGuess - this.winningNumber);
}
Game.prototype.isLower = function(){
  return this.playersGuess < this.winningNumber;
}
Game.prototype.playersGuessSubmission = function(guess){
  if (isNaN(guess) || guess < 1 || guess > 100){
    throw "That is an invalid guess.";
  }
  this.playersGuess = guess;
  return this.checkGuess();
}
Game.prototype.checkGuess = function(){
  if (Number(this.playersGuess) === this.winningNumber){
    this.hasEnded = true;
    return "You Win!";
  }
  if (this.pastGuesses.includes(this.playersGuess)){
    return "You have already guessed that number.";
  }
  this.pastGuesses.push(this.playersGuess);
  if (this.pastGuesses.length === 5){
    this.hasEnded = true;
    return "You Lose.";
  }
  if (this.difference() < 10){
    return "You\'re burning up!";
  }
  if (this.difference() < 25){
    return "You\'re lukewarm.";
  }
  if (this.difference() < 50){
    return "You\'re a bit chilly.";
  }
  if (this.difference() < 100){
    return "You\'re ice cold!";
  }
}
let newGame = function(){
  return new Game();
}
Game.prototype.provideHint = function(){
  let hintArray = [this.winningNumber];
  //possible repeats in Hints
  hintArray.push(generateWinningNumber(), generateWinningNumber());
  shuffle(hintArray);
  return hintArray;
}
module.exports = {
  newGame
}
