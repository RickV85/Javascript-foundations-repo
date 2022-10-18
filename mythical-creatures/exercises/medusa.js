var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
    this.name = name;
    this.statues = [];
    }
    gazeAtVictim (victim) {
        if (this.statues.length < 3) {
            this.statues.push(new Statue(victim.name));
        } else if (this.statues.length >= 3) {
            this.statues.push(new Statue(victim.name));
            const freed = this.statues.shift();
            return new Person(freed.name, freed.mood = `relieved`);
        }
    }
};


module.exports = Medusa;