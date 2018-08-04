const Word = require('./word.js');
const Letter = require('./letter.js');
const inquirer = require('inquirer');

const newWord = function (string) {
    let test = new Word;
    for (var i = 0; i < string.length; i++) {
        test.letters.push(new Letter(string[i]));
    }
    return test;
}

const belgium = newWord('Belgium');

console.log(belgium.phrase());
console.log(belgium.letters);

/* inquirer.prompt([{
    type: "prompt",
    message: "Guess a letter!",
    name: "guess"
}]).then(answers => {
    console.log(answers);
}) */