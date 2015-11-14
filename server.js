var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/app/"));

var bodyparser = require("body-parser"); 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var objectProp = require('./app/lib/getRandomWord');
var adjectives = require('./app/lib/adjective');

function verbs()
  {
    this.running = true;
    this.eating = true;
    this.shooting = true;
    this.slipping = true;
  }
function nouns()
  {
    this.phone = true;
    this.door = true;
    this.dog = true;
    this.lap = true;
  }  
var adjective = new adjectives();
var noun = new nouns();
var verb = new verbs();

function postWord (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'}; 
    };
  wordObject[word] = true;
  console.dir(wordObject)
  return {msg: 'Thanks for adding '+ word +"!"};
};

app.get("/adjective", function(req, res){
  res.json(objectProp(adjective));
});
app.get("/noun", function(req, res){
  res.json(objectProp(noun));
});
app.get("/verb", function(req, res){
  res.json(objectProp(verb));
});
app.get("/", function(req, res){
  res.sendFile('/Users/thoma_000/Desktop/Projects2/CodeFellows F2/band-name-generator/index.html')
});
app.post("/adjective", function(req, res) {
  res.json(postWord(req.body.word, adjectives));
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
