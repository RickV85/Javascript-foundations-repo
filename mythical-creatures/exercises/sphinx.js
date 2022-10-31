class Sphinx {
    constructor() {
        this.riddles = [];
    }
    collectRiddle(riddle) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddle);
        } else {
            this.riddles.push(riddle);
            this.riddles.splice(0,1);
        }
    }
}


module.exports= Sphinx;