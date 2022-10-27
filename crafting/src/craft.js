class Craft {
    constructor(craftObj) {
        this.name = craftObj.type;
        this.materials = craftObj.materials;
        this.completed = false;
    }
    completeCraft() {
        this.completed = true;
        return `All done! It looks great!`
    }
    calculateProjectTotal() {
        // Make sure to create the var total above the for loop and then
        // use the += addition assignment on it in the loop, return after the loop
        var totalCost = 0;
        for (let index = 0; index < this.materials.length; index++) {
            totalCost += (this.materials[index].price * this.materials[index].amount);
        }
        return totalCost;
    }
}

module.exports = Craft;
