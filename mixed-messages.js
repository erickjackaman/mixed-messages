// Codecademy Project
// Start date: 25 Jan 2022
// Every time a user runs a program, they should get a new, randomized output. 
// Message idea: greeting + colour + animal
// Additional comment test

//Array to store greetings
var greetings = ["hello", "bonjour", "greetings", "hola", "welcome", "hi", "hey there"];
//Array to store colours
var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//Array to store animals
var animals = ["tiger", "bear", "pigeon", "peacock", "anaconda", "panda", "firefly"];

//Create function to generate random number between 0 and 6
function getRandomInt() {
    return Math.floor(Math.random() * 7);
  }

//Create variable for each part of the message
var randomGreeting = greetings[getRandomInt()];
var randomColour = colours[getRandomInt()];
var randomAnimal = animals[getRandomInt()];

//Create message string
var messageString = randomGreeting + " " + randomColour + " " + randomAnimal;

//Print message to console
console.log(messageString);
