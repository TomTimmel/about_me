'use strict';

var userName = prompt('What\'s your name?');
alert('Thanks ' + userName + ', please answer the following questions for me by typing yes or no.  OK?');
console.log ('The users name is ' + userName);
document.write('<p>' + userName + ', I\'m glad you got that one right!' + '</p>');
var correctAns = 0;

var theFirstQuestions = ['Am I from Alaska?', 'Do I love to play Ultimate Frisbee?', 'Do I have a girlfriend named Christine?', 'Do I like to travel?','Do I like coding?'];

var theCorrectAnswers = ['yes','yes','yes','yes','yes'];
var theIncorrectAnswers = ['no', 'no', 'no', 'no', 'no'];
var correctMessages = ['Right! I lived in Alaska for the last 20 years, but I grew up in Cincinnati...', 'Yes! I love to play Ultimate, my league team this year was a lot of fun. I also like basketball...', 'Yes! I\'m pretty lucky, she\'s great!', 'Yes! I just got back from Indonesia!', 'Correct! You\'re doing great.'];
var incorrectMessages = ['Actually I am from Alaska.', 'Nope, Ultimate is my favorite game.', 'Nope, I do have a girlfriend named Christine.', 'Nope, actually I do like to travel.', 'Nope, I do like coding.'];

for (var m = 0; m < theFirstQuestions.length; m++) {
  tomsQuestions(m);
}

function tomsQuestions(pointer) {
  var theResponse = prompt(theFirstQuestions[pointer]);

  if(theResponse.toLowerCase() === theCorrectAnswers[pointer] || theResponse.toLowerCase() === theCorrectAnswers[pointer][0]) {
    alert(correctMessages[pointer]);
    document.write('<p>' + correctMessages[pointer] + '</p>');
    console.log(correctMessages[pointer]);
    correctAns += 1;
  } else if(theResponse.toLowerCase() === theIncorrectAnswers[pointer] || theResponse.toLowerCase() === theIncorrectAnswers[pointer][0]){
    alert(incorrectMessages[pointer]);
    document.write('<p>' + incorrectMessages[pointer] + '</p>');
    console.log(incorrectMessages[pointer]);
  } else {
    alert('Are you really not able to follow instructions, answer yes, or no!');
    console.log('They are too dumb to answer yes or no');
  }
}

function guessingGame() {
  alert('Welcome to my guessing game!');

  var randomNum = (Math.floor(Math.random() * 10) + 1);
  console.log('the number is:', randomNum);
  for (var i = 0; i < 4; i++){
    var userGuess = prompt('Guess a number from 1-10');
    userGuess = Number(userGuess);
    if(randomNum === userGuess) {
      alert('Congratulations, you got it!');
      document.write('<p>' + userGuess + ' Congratulations, you got it!' + '</p>');
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
      document.write('<p>' + userGuess + ' Nope you didn\'t guess it, good try though.' + '</p>');
    }
  }
}
guessingGame();

function visitedCountries() {
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
      document.write('<p>' + countryGuess + ' is correct' + '</p>');
      document.write('<h1>' + 'Congratulations, you answered ' + correctAns + ' out of 7 correctly!' + '</h1>');
      k = 5;
    } else{
      alert('Woops, I have not been there, please try again...');
      if(k > 4) {
        document.write('<p>' + 'Sorry, none of your answers are correct' + '</p>');
        document.write('<h1>' + 'Congratulations, you answered ' + correctAns + ' out of 7 correctly!' + '</h1>');
      }
    }
  }
}
visitedCountries();
