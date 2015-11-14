/*
This is a randomString generator, to be added later.

function randomString(){
    var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    possibleLetters += possibleLetters.toLowerCase();

    var randomized = "";

    for(var i = 0; i < 7; i++)
    {
      randomized += possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
    }
    return randomized;
  }
*/

$("button").click(function() { 
   $.get("http://localhost:3000/adjective", 
    function(response) 
    {    
      var adjective = response.word;
     $("#adjective").text(adjective);   
      }); 
   $.get("http://localhost:3000/verb", 
    function(response) 
    {    
      var verb = response.word;
     $("#verb").text(verb);   
      });
   $.get("http://localhost:3000/noun", 
    function(response) 
    {    
      var noun = response.word;
     $("#noun").text(noun);   
      }); 
 });

$("#submitWords").on("submit", function(e){
  e.preventDefault();
  var adjective = $("input[name=adjective]").val();
  var adjPost;
  if (adjective)
  {
    adjPost = {word: adjective};
    console.log(adjPost);
    $.post("/adjective", adjPost, function(response){
      var adjRes = response.msg;
      $("#adjectiveRes").text(adjRes);
    });
  }
});