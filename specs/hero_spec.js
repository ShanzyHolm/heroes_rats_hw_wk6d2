const assert = require("assert");
const Hero = require("../hero.js");
const Food = require("../food.js");

describe("Hero", function() {
  beforeEach(function(){
    hero = new Hero ("He-Man", "apples");
  });

  it("should have a name", function(){
    // arrange
    // act
    const actual = hero.name;
    // assert
    assert.strictEqual(actual, "He-Man");
  });

  it("should have health", function(){
    // arrange
    // act
    const actual = hero.health;
    // assert
    assert.strictEqual(actual, 100)
  });

  it("should have a favourite food", function(){
    // arrange
    // act
    const actual = hero.favouriteFood;
    // assert
    assert.strictEqual(actual, "apples")
  });

  it("should say their name", function(){
    // arrange
    // act
    const actual = hero.sayName();
    // assert
    assert.strictEqual(actual, "He-Man is here to save the day!")
  });

  it("should have a collection of tasks to complete", function(){
    // arrange
    // act
    const actual = hero.tasks;
    // assert
    assert.deepStrictEqual(actual, [])
  });

  it("should get the number of tasks to complete", function(){
    // arrange
    // act
    const actual = hero.numberOfTasks();
    // assert
    assert.strictEqual(actual, 0)
  });

  it("should add a task to collection", function(){
    // arrange
    hero.addTask("transform")
    // act
    const actual = hero.numberOfTasks();
    // assert
    assert.strictEqual(actual, 1)
  });

  it("should be able to eat food", function(){
    // arrange
    const food = new Food("bananas", 5)
    hero.eatFood(food)
    // act
    const actual = hero.health;
    //assert
    // assert.strictEqual(actual, "Crunch, crunch, apples are delicious!")
    assert.strictEqual(actual, 105)
  });

  it("should have health increase *1.5 value if eaten favourite food", function(){
    // arrange
    const food = new Food("apples", 10)
    hero.eatFavouriteFood(food)
    // act
    const actual = hero.health;
    //assert
    assert.strictEqual(actual, 115)
  });


});
