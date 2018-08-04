const Word = require('./word.js');
const Letter = require('./letter.js');
const inquirer = require('inquirer');

let wordList = [];
let wordIndex = 0;

let guessesRemaining = 10;
let guesses = [];
let nWins = 0;

const alpha = 'abcdefghijklmnopqrstuvwxyz';

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
newWord('Mongolia');
newWord('Austria');
newWord('Nicaragua');

const nextWord = function () {
    wordIndex++;
    guessesRemaining = 10;
    guesses = [];
}

const endMessage = function () {
    console.log("\nYou got " + nWins + " out of " + wordList.length + " words correct!");
    if (nWins == wordList.length) console.log("\n100%!! Great job!!");
}

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
                let goodGuess = false;

                if (!guesses.includes(guess)) {

                    guesses.push(guess);
                    goodGuess = wordList[wordIndex].lGuess(guess);

                    if (!goodGuess) {
                        console.log("\nINCORRECT!!!");
                        if (guessesRemaining > 1) {
                            guessesRemaining--;
                            console.log("\n" + guessesRemaining + " guesses remaining!!!");
                        } else {
                            if (wordIndex < wordList.length - 1) {
                                console.log("\nRan out of guesses! Next word");
                                nextWord();
                            } else {
                                console.log("\nNo more words!");
                                endMessage();
                                return;
                            }
                        }
                    } else {
                        console.log("\nCORRECT!!!");
                    }
                } else {
                    console.log("\nLetter already guessed!");
                }
                let currStatus = wordList[wordIndex].phrase();
                console.log("\n" + currStatus + "\n");
                let foundUnderscore = false;
                for (var i = 0; i < currStatus.length; i++) {
                    if (currStatus[i] == '_') foundUnderscore = true;
                }
                if (!foundUnderscore) {
                    nWins++;
                    if (wordIndex < wordList.length - 1) {
                        console.log("\nYou got it right! Next word!\n");
                        nextWord();
                        console.log(wordList[wordIndex].phrase() + "\n");
                        guessLoop();
                    } else {
                        console.log("\nYou guessed the last word! Congrats!");
                        endMessage();
                    }
                } else {
                    guessLoop();
                }
            } else {
                console.log("\nInvalid character!\n");
                guessLoop();
            }
        } else {
            console.log("\nInvalid entry\n");
            guessLoop();
        }
    })
}

console.log(wordList[wordIndex].phrase() + "\n");
guessLoop();