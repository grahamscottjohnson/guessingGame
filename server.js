let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
// let handleGuess = require("./public/src/index.js");

let app = express();
//set up body parser
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static("./"));
//app.use(bodyParser.urlencoded({extended: false}));

app.post("/guesses/add", urlencodedParser, (req, res) => {
  //need body parser to accept the form names.
  if (!req.body){res.status(400).send("Could not find guess")}
  //check if req.body.guess is answer

  // handleGuess(req.body.guess)
  //learn databases to handleGuess -- don't need it for this
  //make sure guess is a number

  // if (!handleGuess()){
  //   //add req.guess to database
  //   store.dispatch({
  //     type: "ADD",
  //     guess: req.body.guess
  //   })
  //   //indicate warmer/colder
  //
  // }
  //end

  //route to index.html
  // res.send(req.body.guess);
});

app.listen(3000, function(){
  console.log("Running on port 3000");
});
