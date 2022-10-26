const Direwolf = require("./direwolf");

class Stark {
    constructor(starkObj) {
        this.name = starkObj.name;
        this.location = starkObj.area || "Winterfell";
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe === false) {
            return `Winter is Coming`
        } else {
            return `The North Remembers`
        }
    }
    callDirewolf(name, home) {
        var newDirewolf = new Direwolf(name, home)
        newDirewolf.home = this.location
        newDirewolf.protect(this)
        return newDirewolf
    }
}
module.exports = Stark;