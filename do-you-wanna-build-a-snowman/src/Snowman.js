class Snowman {
    constructor(snowmanDetails) {
        this.carrots = snowmanDetails.carrots;
        this.coal = snowmanDetails.coal || 2;
        this.buttons = snowmanDetails.buttons;
        this.snowballs = snowmanDetails.snowballs;
        this.magicHat = false;
    }
    canWearMagicHat() {
    if (this.carrots < 1 || this.snowballs < 2) {
        return false;
    } else if (this.coal < 2 || this.buttons < 5) {
        this.magicHat = false;
        return false;
    } else if (this.coal >= 2 && this.buttons >= 5) {
        this.magicHat = true;
        return true;  
    }
}
}

module.exports = Snowman;