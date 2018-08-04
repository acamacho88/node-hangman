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
            if (lett.guess(char)) goodGuess = true;
        })
        return goodGuess;
    }
}

module.exports = Word;