const Word = require('./word.js');
const Letter = require('./letter.js');
const inquirer = require('inquirer');

let wordList = [];
let wordIndex = 0;

let guessesRemaining = 10;
let guesses = [];

const alpha = 'abcdefghijklmnopqrstuvwxtz';

const newWord = function (string) {
    let test = new Word;
    for (var i = 0; i < string.length; i++) {
        test.letters.push(new Letter(string[i]));
    }
    wordList.push(test);
}

newWord('Belgium');
newWord('Mozambique');
newWord('Uzbekistan');
newWord('Mongolio');
newWord('Austria');
newWord('Nicaragua');
/* 
console.log(belgium.phrase());
console.log(belgium.letters);
 */

let guessLoop = function () {
    inquirer.prompt([{
        type: "prompt",
        message: "Guess a letter!",
        name: "guess"
    }]).then(answers => {
        if (answers.guess.length == 1) {
            let alphaCheck = false;
            for (var i = 0; i < alpha.length; i++) {
                if (answers.guess.toLowerCase() == alpha[i]) alphaCheck = true;
            }
            if (alphaCheck) {
                let guess = answers.guess.toLowerCase();
                if (!guesses.includes(guess)) {
                    wordList[wordIndex].lGuess(guess);
                } else {
                    console.log("Letter already guessed!");
                }
                let currStatus = wordList[wordIndex].phrase();
                console.log(currStatus);
                let foundUnderscore = false;
                for (var i = 0; i < currStatus.length; i++) {
                    if (currStatus[i] == '_') foundUnderscore = true;
                }
                if (!foundUnderscore) {
                    if (wordIndex < wordList.length - 1) {
                        console.log("You got it right! Next word!");
                        wordIndex++;
                        guessLoop();
                    } else {
                        console.log("You guessed the last word! Congrats!");
                    }
                } else {
                    guessLoop();
                }
            }
        } else {
            console.log("Invalid entry");
        }
    })
}

guessLoop();