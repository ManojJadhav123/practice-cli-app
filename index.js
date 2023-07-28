var readlineSync = require("readline-sync");
var score = 0;

//data of high scores
var highScores = [
  
  {
    name : "kiran",
    score : "3"
  },
  {
    name : "vishnu",
    score : "2"
  }
]

//welcome function/welcome functi
function welcome(){
  
  username = readlineSync.question("What is your name? ");
  console.log("Welcome " + username + " DO YOU KNOW Manoj ? ");
  
  }

// playfunction
function play(question, answer){
  userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("you were right!");
    score++;
  }
  else{
    console.log("you were wrong!");
  }
  console.log("your current score is : " , score);
}

 // array of objects
  var questions = [
    
      questionOne = {
        question : " in which Country he Lives? ", 
        answer : "india",
      },
      questionTwo = {
        question : "in which University he Completed his Graduation? ", 
        answer : "lpu",
      },
      questionThree = {
        question : " His favourite Superhero would Be? " , 
        answer : "batman"
      }
  ]
  
function game(){
    for (let i = 0; i < questions.length ; i++) {
      play(questions[i].question, questions[i].answer);
  }
}

function showScores(){
    console.log("YAY! you scored: ", score);
  
    console.log("check out the high scores, if you should be there then ping me I'll update it");

  highScores.map(score => console.log(score.name,": ",score.score));
}

welcome();
game();
showScores();

