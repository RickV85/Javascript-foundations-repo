class Sphinx {
    constructor() {
        this.riddles = [];
        this.heroesEaten = 0;
    }
    collectRiddle(riddle) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddle);
        } else {
            this.riddles.push(riddle);
            this.riddles.splice(0,1);
        }
    }
    attemptAnswer(attempt) {
        for (let index = 0; index < this.riddles.length; index++) {
            if ((this.riddles[index].answer == attempt) && (this.riddles.length > 1)) {
                this.riddles.splice(index, 1);
                return `That wasn't that hard, I bet you don't get the next one`;
            } else if ((this.riddles[index].answer == attempt) && (this.riddles.length <= 1)) {
                this.riddles.splice(index, 1);
                return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${attempt}"???`;
            }
        }
        this.heroesEaten += 1;
    }
}


module.exports= Sphinx;