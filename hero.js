// A. Create a constructor to create a Hero character
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
const Hero = function(name, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

// A Hero can talk saying their name
Hero.prototype.sayName = function() {
  // return this.name;
  return `${this.name} is here to save the day!`
}


module.exports = Hero;
