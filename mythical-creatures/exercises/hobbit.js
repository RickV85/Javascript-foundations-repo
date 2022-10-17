class Hobbit {
    constructor(name, age = 0) {
    // Tried to convert this {name: Mark} to a string.
    // Need to remember to use dot notation to access the name key.
    this.name = name.name;
    this.age = age;
    this.adult = (this.age >= 33);
    this.old = (this.age >= 101);
    this.hasRing =false;
    }
    celebrateBirthday() {
        this.age += 1;
        // Had to put these down here to change .adult
        // and .old instead of the constructor with how
        // the test's timeTravel function worked with this
        // function. Made a new hobbit below to test defaults.
        this.adult = (this.age >= 33);
        this.old = (this.age >= 101);
    }
    getRing() {
        if (this.name === "Frodo") {
            this.hasRing = true;
            return `Here is the ring!`
        } else {
            return `You can't have it!`
        }
    }
}

// Made these to confirm that code works if new hobbits were
// created with an age that they would be considered old/adults.
var golum = new Hobbit({name: "Golum"}, 200)
console.log(golum);

var adult = new Hobbit({name: "Adult Hobbit"}, 50)
console.log(adult);


module.exports = Hobbit;