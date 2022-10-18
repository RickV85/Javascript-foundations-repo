class Person {
    constructor(name, mood = `frightened`) {
        this.name =  name;
        this.mood = mood;
    }
};

module.exports = Person;