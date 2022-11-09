var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = 'up';
    }
    admitSkier(name, ticket) {
        var newSkier = new Skier(name, ticket);
        if (this.limit > this.skiers.length && newSkier.hasLiftTicket) {
        this.skiers.push(newSkier);
        } else if (this.limit <= this.skiers.length) {
            return `Sorry, ${newSkier.name}. Please wait for the next lift!`;
        } else if (!newSkier.hasLiftTicket) {
            return `Sorry, ${newSkier.name}. You need a lift ticket!`
        }
    }
    startLift() {
        if (this.limit === this.skiers.length) {
        this.safetyBar = 'down';
        } else if ((this.limit - this.skiers.length) > 1) {
            return `We still need ${this.limit - this.skiers.length} more skiers!`
        } else if ((this.limit - this.skiers.length) === 1) {
            return `We still need ${this.limit - this.skiers.length} more skier!`
        }
    }
}

module.exports = Lift;