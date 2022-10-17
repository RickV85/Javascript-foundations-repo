
class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.food = 3;
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        this.food -= 1;
        if (this.food == 0) {
            this.hungry = false;
        }
    }
};




module.exports = Dragon;
