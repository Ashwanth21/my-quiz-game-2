var canvas, backgroundImage;

var gameState = 0;

var playerCount;

var allPlayers
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
}
