var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  }
  fillFoodBowl() {
    // this.dog.hungry = false; also works, but this invokes a
    // method of the Dog class instead
    this.dog.eat();
  }
  throwBall() {
    // if (this.dog.energyLevel <= 3) {
    //   return;
    // }
    // this.dog.energyLevel -= 1;
    // ^^^ this works but can also invoke a method from Dog class
    // that will achieve the same effect.
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  }
  introduceNewFriends(dogObj) {
    // this.dog.friends.push(dogObj.name);
    // ^^^ this works but below invokes a method in Dog
    this.dog.makeNewFriend(dogObj);
  }
  adoptAPup(newDogName, newDogAge) {
    if (this.dog === undefined) {
      // var newDog = new Dog({"name": name, "age": age})
      // this.dog = newDog;
      var newDog = new Dog({ name: newDogName, age: newDogAge });
      this.dog = newDog;
    } else {
      return `You can't adopt ${newDogName}. You already have ${this.dog.name}!`
    }
    

  }
}

module.exports = Person;
