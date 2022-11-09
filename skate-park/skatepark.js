class SkatePark {
    constructor(parkObj) {
        this.name = parkObj.name;
        this.yearFounded = parkObj.year;
        this.style = parkObj.type;
        this.features = parkObj.features;
        this.isPrivate = parkObj.isPrivate || false;
        this.cost = parkObj.price || 0;
        this.occupants = [];
    }
    admit(skater) {
        if (this.occupants.length >= 3) {
            return `Sorry, we are at max capacity. Thank you for understanding.`;
        } else if (this.isPrivate == false) {
            this.occupants.push(skater);
            return `Welcome to the free ${this.name} Skatepark!`
        } else if (this.isPrivate == true && ((skater.money - this.cost) >= 0)) {
            skater.money -= this.cost;
            this.occupants.push(skater);
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
        } else if (this.isPrivate == true && ((skater.money - this.cost) < 0)) {
            return `Sorry, you don't have enough money.`;
        }
    }   
}



module.exports = SkatePark;