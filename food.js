const Food = function(name, replenishment) {
  this.name = name;
  this.replenishment = replenishment;
  this.isPoisonous = false;
}

// Food.prototype.eat = function(food, replenishment) {
//   return this.replenishment;
// }

module.exports = Food;
