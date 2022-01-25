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

//Random number generator between 0 and 7 
var randomNumber = Math.floor(Math.random() * 8);

var randomGreeting = greetings[randomNumber];
var randomColour = colours[randomNumber];
var randomAnimal = animals[randomNumber];

randomGreeting;
randomColour;
randomAnimal;

var messageString = randomGreeting + " " + randomColour + " " + randomAnimal;

console.log(messageString);