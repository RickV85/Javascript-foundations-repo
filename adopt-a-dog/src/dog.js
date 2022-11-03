class Dog {
  constructor(dogObj) {
    this.name = dogObj.name;
    this.age = dogObj.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }
  eat() {
    if (this.hungry === true){
      this.hungry = false;
      return `Yum!`;
    } else if (this.hungry === false) {
      return `I refuse to eat.`
    }
  }
  fetchBall() {
    // When invoked, this should reduce energyLevel by 1
    // and return a string of This is fun!
    // Then, if the energey level is less than or equal to 3
    // do not reduce energyLevel and return `Nah...`
    if (this.energyLevel > 3) {
      this.energyLevel -= 1;
      return `This is fun!`;
    } else if (this.energyLevel <= 3) {
      return `Nah, I'm going to sleep instead.`
    }
  }
  sleep() {
    // Add 1 to energyLevel unless its >= 10
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    } else if (this.energyLevel >= 10) {
      return `I have too much energy to rest. I'm going to chew something instead.`
    }
  }
  makeNewFriend(friend) {
    // Need to push a string of the friend argument's name
    // in to the friends array
    this.friends.push(friend.name);
  }
}

module.exports = Dog;
