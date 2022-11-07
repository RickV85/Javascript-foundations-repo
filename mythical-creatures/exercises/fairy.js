class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris'],
        };
        this.disposition = 'Good natured';
        this.humanWards = [];
    }
    receiveBelief() {
        this.dust += 1;
    }
    believe() {
        this.dust += 10;
    }
    makeDresses(addDresses) {
        // Found a way to push an array in to an array, but make each
        // value part of the array with this "..." spread operator.
        this.clothes.dresses.push(...addDresses);
        // for (let index = 0; index < addDresses.length; index++) {
        //     this.clothes.dresses.push(addDresses[index]);
        // }
    }
    becomeProvoked() {
        this.disposition = 'Vengeful';
    }
    replaceInfant(infant) {
        if (this.disposition === 'Vengeful') {
        infant.disposition = 'Malicious';
        } else {
            return infant;
        }
        this.humanWards.push(infant);
        if (this.humanWards.length >= 3) {
            this.disposition = 'Good natured';
        }
    }
}


module.exports = Fairy;