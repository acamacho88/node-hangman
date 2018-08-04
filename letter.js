function Letter(value) {
    this.value = value;
    this.guessed = false;
    this.currStatus = function () {
        return this.guessed ? this.value : "_";
    }
    this.guess = function (attempt) {
        if (attempt == this.value) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;