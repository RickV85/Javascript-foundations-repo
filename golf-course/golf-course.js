class GolfCourse {
    constructor(name, difficulty, openings, features) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = features;
        this.currentlyPlaying = [];
    }
    checkInGroup(group) {
        if (this.openings - (group.length + this.currentlyPlaying.length) >= 0) {
            this.openings -= group.length;
            for (var index = 0; index < group.length; index++) {
                this.currentlyPlaying.unshift(group[index].name);
                }
            return 'You\'re checked in. Have fun!';
        } else {
            return 'Sorry, we are currently booked! Please come back later.';
        }
    }
}
module.exports = GolfCourse;
