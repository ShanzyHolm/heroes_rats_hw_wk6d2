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

// A Hero has a collection of tasks to complete
Hero.prototype.numberOfTasks = function() {
  return this.tasks.length;
}

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Hero.prototype.eatFood = function(food) {
  if(food.isPoisonous){
    this.health -= food.replenishment;
  }
  else if (this.favouriteFood === food.name) {
    this.health += food.replenishment * 1.5;
  }
  else {
    this.health += food.replenishment;
  }
}

Hero.prototype.sortTasks = function(property){
  this.tasks.sort(function(a, b) {
    return a[property] - b[property];
  });
}
// ascending order
//
// Hero.prototype.sortTasks = function(property){
//   this.tasks.sort(function(a, b) {
//     return b[property] - a[property];
//   });
// }
// descending order

// Hero.prototype.sortTasks - function(property){
//   this.tasks.sort(function(a, b) {
//     return a.difficulty - b.difficulty;
//   });
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Hero.prototype.getCompleteTasks = function(){
  return this.tasks.filter(task => task.isCompleted)
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Hero.prototype.eatFood = function(food) {
//   return this.health += food.replenishment
// }
//
// Hero.prototype.eatFavouriteFood = function(food) {
//   favFoodReplenish = food.replenishment * 1.5
//   return this.health += favFoodReplenish
// }
//
// Hero.prototype.eatFood = function(food) {
//   return this.health += food.replenishment
// }

// pseudocode
// hero takes in a food to eat
// eaten food needs to return replenishment
// replenishment is ADDED to hero health
//

// Hero.prototype.eatFood = function(food) {
//   return `Crunch, crunch, ${this.favouriteFood} are delicious!`;
// }

module.exports = Hero;
