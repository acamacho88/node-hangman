const Letter = require('./letter');

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
        this.letters.forEach(lett => {
            lett.guess(char);
        })
    }
}