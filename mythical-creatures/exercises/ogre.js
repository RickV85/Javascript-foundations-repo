const Human = require("./human");

class Ogre {
    constructor(ogreObj) {
        this.name = ogreObj.name;
        this.home = ogreObj.abode || 'Swamp';
        this.swings = 0;
    }
    encounter(human) {
        human.encounterCounter += 1;
        if (human.encounterCounter === 3) {
            this.swings += 1;
        } else if (human.encounterCounter === 6) {
            this.swings += 1;
            human.knockedOut = true;
        }
    }
    swingAt() {
        this.swings += 1;
    }
    apologize(human) {
        human.knockedOut = false;
    }
}



module.exports = Ogre;