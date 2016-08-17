'use strict';

var userName = prompt('Hello, what\'s your name?');
alert('Thanks ' + userName + ', please answer the following questions for me by typing yes or no.  OK?');
console.log ('The users name is ' + userName);

var whereAmIFrom = prompt('Am I from Alaska?');

if(whereAmIFrom.toLowerCase() === 'yes' || whereAmIFrom.toLowerCase() === 'y') {
  alert('Right! I lived in Alaska for the last 20 years, but I grew up in Cincinnati...');
  console.log('There answer was correct, I am from Alaska');
} else if(whereAmIFrom.toLowerCase() === 'no' || whereAmIFrom.toLowerCase() === 'n'){
  alert('Actually I am from Alaska');
  console.log('There answer was incorrect, I am from Alaska');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Alaska-They are too dumb to answer yes or no');
}

var myFavoriteGame = prompt('Do I love to play Ultimate Frisbee?');

if(myFavoriteGame.toLowerCase() === 'yes' || myFavoriteGame.toLowerCase() === 'y') {
  alert('Yes! I love to play Ultimate, my league team this year was a lot of fun. I also like basketball...');
  console.log('There answer was correct, I love ultimate');
} else if(myFavoriteGame.toLowerCase() === 'no' || myFavoriteGame.toLowerCase() === 'n'){
  alert('Nope, Ultimate is my favorite game');
  console.log('There answer was incorrect, I love ultimate');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Ultimate-They are too dumb to answer yes or no');
}

var girlfriend = prompt('Do I have a girlfriend named Christine?');

if(girlfriend.toLowerCase() === 'yes' || girlfriend.toLowerCase() === 'y') {
  alert('Yes! I\'m pretty lucky, she\'s great!');
  console.log('There answer was correct, Christine is my girlfriend');
} else if(girlfriend.toLowerCase() === 'no' || girlfriend.toLowerCase() === 'n'){
  alert('Nope, I do have a girlfriend named Christine');
  console.log('There answer was incorrect, I have a girlfriend named Christine');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Girlfriend-They are too dumb to answer yes or no');
}

var travel = prompt('Do I like to travel?');

if(travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
  alert('Yes! I just got back from Indonesia!');
  console.log('There answer was correct, I do like to travel');
} else if(travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n'){
  alert('Nope, actually I do like to travel');
  console.log('There answer was incorrect, I do like to travel');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Travel-They are too dumb to answer yes or no');
}

var progr = prompt('Do I like coding?');

if(progr.toLowerCase() === 'yes' || progr.toLowerCase() === 'y') {
  alert('Correct! You\'re doing great');
  console.log('There answer was correct, I do like coding, now check out this website to see more about my background, thanks ' + userName + '!');
} else if(progr.toLowerCase() === 'no' || progr.toLowerCase() === 'n'){
  alert('Nope, I do like coding' );
  console.log('There answer was incorrect, I do like coding');
} else {
  alert('You can\'t follow instructions!');
  console.log('Coding-They are too dumb to answer yes or no');
}
alert('Welcome to my guessing game!');

var randomNum = (Math.floor(Math.random() * 10) + 1);
console.log('the number is:', randomNum);
for (var i = 0; i < 4; i++){
  var userGuess = prompt('Guess a number from 1-10');
  userGuess = Number(userGuess);
  if(randomNum === userGuess) {
    alert('Congratulations, you got it! Now check out this website to see more about my background, thanks ' + userName + '!');
    i = 4;
  }else if (i < 3) {
    if(randomNum > userGuess){
      alert('Nice try, but that\'s too low...try again!');
    }else {
      alert('Nice try, but that\'s too high...try again!');
    }
    alert('Nice try, but that\'s not it...try again!');
  }else {
    alert ('Nope you didn\'t guess it, Now check out this website to see more about my background, thanks ' + userName + '!');
  }
}
var countryGuess = prompt('Out of the listed countries, guess which ones I have been to in the last 2 years? Hint:There are 6! Norway, India, Argentina, Indonesia, Kenya, Thailand, Chile, Brazil, El Salvador, Guadalupe, China');
var countryGuess = countryGuess.toLowerCase;
var countryAnswer = new Array('argentina', 'indonesia', 'thailand', 'chile', 'el salvador', 'guadalupe');
for(countryAnswer.toLowerCase = 0; countryAnswer<6, )
if(countryGuess.toLowerCase === countryAnswer[]){
  alert('great job');
} else {
  alert('woops');
}
