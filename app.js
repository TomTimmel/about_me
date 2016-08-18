'use strict';

var userName = prompt('What\'s your name?');
alert('Thanks ' + userName + ', please answer the following questions for me by typing yes or no.  OK?');
console.log ('The users name is ' + userName);
var correctAns = 0;
var whereAmIFrom = prompt('Am I from Alaska?');

if(whereAmIFrom.toLowerCase() === 'yes' || whereAmIFrom.toLowerCase() === 'y') {
  alert('Right! I lived in Alaska for the last 20 years, but I grew up in Cincinnati...');
  console.log('There answer was correct, I am from Alaska');
  correctAns = correctAns + 1;
} else if(whereAmIFrom.toLowerCase() === 'no' || whereAmIFrom.toLowerCase() === 'n'){
  alert('Actually I am from Alaska.');
  console.log('There answer was incorrect, I am from Alaska.');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Alaska-They are too dumb to answer yes or no');
}

var myFavoriteGame = prompt('Do I love to play Ultimate Frisbee?');

if(myFavoriteGame.toLowerCase() === 'yes' || myFavoriteGame.toLowerCase() === 'y') {
  alert('Yes! I love to play Ultimate, my league team this year was a lot of fun. I also like basketball...');
  console.log('There answer was correct, I love ultimate.');
  correctAns = correctAns + 1;
} else if(myFavoriteGame.toLowerCase() === 'no' || myFavoriteGame.toLowerCase() === 'n'){
  alert('Nope, Ultimate is my favorite game.');
  console.log('There answer was incorrect, I love ultimate.');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Ultimate-They are too dumb to answer yes or no');
}

var girlfriend = prompt('Do I have a girlfriend named Christine?');

if(girlfriend.toLowerCase() === 'yes' || girlfriend.toLowerCase() === 'y') {
  alert('Yes! I\'m pretty lucky, she\'s great!');
  console.log('There answer was correct, Christine is my girlfriend');
  correctAns = correctAns + 1;
} else if(girlfriend.toLowerCase() === 'no' || girlfriend.toLowerCase() === 'n'){
  alert('Nope, I do have a girlfriend named Christine.');
  console.log('There answer was incorrect, I have a girlfriend named Christine');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Girlfriend-They are too dumb to answer yes or no');
}

var travel = prompt('Do I like to travel?');

if(travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
  alert('Yes! I just got back from Indonesia!');
  console.log('There answer was correct, I do like to travel');
  correctAns = correctAns + 1;
} else if(travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n'){
  alert('Nope, actually I do like to travel.');
  console.log('There answer was incorrect, I do like to travel');
} else {
  alert('Are you really not able to follow instructions, answer yes, or no!');
  console.log('Travel-They are too dumb to answer yes or no');
}

var progr = prompt('Do I like coding?');

if(progr.toLowerCase() === 'yes' || progr.toLowerCase() === 'y') {
  alert('Correct! You\'re doing great.');
  console.log('There answer was correct, I do like coding, now check out this website to see more about my background, thanks ' + userName + '!');
  correctAns = correctAns + 1;
} else if(progr.toLowerCase() === 'no' || progr.toLowerCase() === 'n'){
  alert('Nope, I do like coding.' );
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
    alert('Congratulations, you got it!');
    i = 4;
    correctAns = correctAns + 1;
  }else if (i < 3) {
    if(randomNum > userGuess){
      alert('Nice try, but that\'s too low...try again!');
    }else {
      alert('Nice try, but that\'s too high...try again!');
    }
  }else {
    alert ('Nope you didn\'t guess it, good try though.');
  }
}


var countryAnswer = new Array('argentina', 'indonesia', 'thailand', 'chile', 'el salvador', 'guadalupe');
for(var k = 0; k < 6; k++) {
  var countryGuess = prompt('One, more question. Out of the listed countries, guess one I have been to in the last 2 years? Hint:There are 6! Norway, India, Argentina, Indonesia, Kenya, Thailand, Chile, Brazil, El Salvador, Guadalupe, China');
  var countryGuess1 = countryGuess.toLowerCase();
  var checkAns = false;
  console.log(countryAnswer[j]);
  console.log(countryGuess1);
  for(var j = 0; j < 6; j++) {
    if(countryGuess1 === countryAnswer[j]){
      checkAns = true;
    }
  }
  if(checkAns === true){
    correctAns = correctAns + 1;
    alert('Great job, you answered ' + correctAns + ' out of 7 correctly. Now check out this website to see more about my background, thanks ' + userName + '!');
    k = 5;
  } else{
    alert('Woops, I have not been there, please try again...');
  }
}
