// This one used objects as test arguments and had no test descriptions.
class Magician {
    constructor(magObj) {
    this.name = `The Great ${magObj.name}`;
    this.assistant = magObj.assistant;
    // Used logical OR operator to assign if magObj.favoriteAccessory
    // existed or 'top hat' if not. Surprised this worked!
    // Could not define in the constructor parameters as its brought in via an object.
    this.favoriteAccessory = (magObj.clothing || `top hat`);
    this.confidencePercentage = 10;
    }
    performIncantation(says) {
        return `${says.toUpperCase()}!`
    }
    performTrick() {
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === "cape"){
            return `PULL DOVE FROM SLEEVE`
        } else {
        return `PULL RABBIT FROM TOP HAT`
        }
    }
    performShowStopper() {
        if (this.confidencePercentage >= 100 && this.assistant) {
            return `WOW! The magician totally just sawed that person in half!`
        } else {
            return `Oh no, this trick is not ready!`;
        }
    }
}

module.exports = Magician;