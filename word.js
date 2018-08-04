// const Letter = require('./letter.js');

function Word() {
    this.letters = [];
    this.phrase = function () {
        let string = '';
        this.letters.forEach(lett => {
            string += lett.currStatus() + ' ';
        })
        return string.trim();
    }
    this.lGuess = function (char) {
        let goodGuess = false;
        this.letters.forEach(lett => {
            goodGuess = lett.guess(char);
        })
        console.log(goodGuess ? "CORRECT!!!" : "INCORRECT!!!");
    }
}

module.exports = Word;