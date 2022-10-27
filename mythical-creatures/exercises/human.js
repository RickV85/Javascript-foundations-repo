class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = 0;
        this.knockedOut = false;
    }
    noticesOgre() {
        if (this.encounterCounter <= 2) {
            return false;
        } else if (this.encounterCounter === 5) {
            return false;
        } else {
            return true;
        }
    }
}


module.exports = Human;