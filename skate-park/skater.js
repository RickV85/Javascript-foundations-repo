class Skater {
    constructor(skaterObj) {
        this.name = skaterObj.name;
        this.skill = skaterObj.skill;
        this.tricks = skaterObj.tricks;
        this.money = skaterObj.cash;
        this.frustration = skaterObj.frustration || 0;
    }
    practice(trick) {
        if (this.tricks[trick] === false && this.frustration < 2) {
            this.frustration += 1;
        } else if (this.tricks[trick] === false && this.frustration >= 2) {
            this.tricks[trick] = true;
            return `I just learned to ${trick}!!!`
        }
    }
}

module.exports = Skater;