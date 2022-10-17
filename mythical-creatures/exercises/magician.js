
class Magician {
    constructor(magObj) {
    this.name = `The Great ${magObj.name}`;
    this.assistant = magObj.assistant;
    // Used logical OR operator to assign if magObj.favoriteAccessory
    // existed or 'top hat' if not. Surprised this worked!
    // Could not define in the constructor parameters as its brought in via an object.
    this.favoriteAccessory = (magObj.clothing || `top hat`)
    }
}

module.exports = Magician;