class Direwolf {
    constructor(name, home = 'Beyond the Wall', size = 'Massive') {
        this.name = name;
        this.home = home;
        this.size = size;
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }
    protect(stark) {
        stark.safe = true
        this.huntsWhiteWalkers = false
        if (this.home === stark.location && this.starksToProtect.length < 2) {
        this.starksToProtect.push(stark)
        }
    }
    leave(stark) {
        stark.safe = false
        var removeStark = this.starksToProtect.indexOf(stark)
        this.starksToProtect.splice(removeStark, 1)
    }
}


module.exports = 
Direwolf;