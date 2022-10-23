class Centaur {
    constructor(centObj) {
        this.name = centObj.name;
        this.breed = centObj.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.crankyPoints = 0;
    }
    shootBow() {
        this.crankyPoints += 1;
        if (this.crankyPoints >= 3 || this.cranky) {
            this.cranky = true;
            return 'NO!'
        } else {
            return 'Twang!!!'
        }
    }
    run() {
        this.crankyPoints += 1;
        if (this.crankyPoints >= 3 || this.cranky) {
        this.cranky = true
            return 'NO!'
        } else {
            return 'Clop clop clop clop!!!'
        }
    }
    sleep() {
        if (this.standing) {
            return 'NO!'
        }
    }
    layDown() {
        this.crankyPoints = 3
        this.standing = false
        this.layingDown = true
    }
    standUp() {
        this.standing = true
        this.layingDown = false
    }
    sleep() {
        this.cranky = false
        this.crankyPoints = 0
        if (this.layingDown && !this.standing) {
            return 'ZZZZ'
        } else if (this.standing) {
            return 'NO!'
        }
    }
    drinkPotion() {
        this.cranky = false
        this.crankyPoints = 0
        if (!this.standing) {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports= Centaur;