const Word = require('./word.js');
const Letter = require('./letter.js');
const inquirer = require('inquirer');

let belgium = new Word;

const belgiumS = 'Belgium';

for (var i = 0; i < belgiumS.length; i++) {
    belgium.letters.push(new Letter(belgiumS[i]))
}

console.log(belgium.phrase());
console.log(belgium.letters);

/* inquirer.prompt(["Guess a letter!"]).then(answers => {
    console.log(answers);
}) */