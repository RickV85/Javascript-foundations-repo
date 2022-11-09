class Skier {
    constructor(name, liftTicket) {
        this.name = name;
        this.hasLiftTicket = liftTicket;
        this.skillLevel = 1;
        this.nextSlope = 'green circle';
    }
    takeLesson() {
        this.skillLevel += 1;
    }
    pickSlope() {
        if (this.skillLevel >= 5) {
            this.nextSlope = 'black diamond';
        } else if (this.skillLevel >= 3) {
            this.nextSlope = 'blue square';
        }
    }
}

module.exports = Skier;