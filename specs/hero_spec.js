const assert = require("assert");
const Hero = require("../hero.js");
const Food = require("../food.js");

let hero;

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

  describe("Hero and Food", function(){
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

    it("should have health increase *1.5 value if eat favourite food", function(){
      // arrange
      const food = new Food("apples", 10)
      hero.eatFood(food)
      // act
      const actual = hero.health;
      //assert
      assert.strictEqual(actual, 115)
    });
    //
    // it("should have health increase *1.5 value if eat favourite food", function(){
    //   // arrange
    //   const food = new Food("apples", 10)
    //   hero.eatFavouriteFood(food)
    //   // act
    //   const actual = hero.health;
    //   //assert
    //   assert.strictEqual(actual, 115)
    // });
  });

  describe("Hero and Tasks", function(){
    xit("view tasks marked as complete", function(){
      // arrange
      // act
      // assert
    });

    xit("view tasks marked as not complete", function(){
      // arrange
      // act
      // assert
    });

    xit("should be able to sort tasks by difficulty", function(){
      // arrange
      // act
      // assert
    });

    xit("should be able to sort tasks by urgency", function(){
      // arrange
      // act
      // assert
    });

    xit("should be able to sort tasks by reward", function(){
      // arrange
      hero.addTask("transform", "easy", "critical", "5 points", "completed");
      hero.addTask("Battle Cat attack", "moderate", "medium", "20 points", "not completed")
      hero.addTask("swing sword", "challenging", "high", "15 points", "completed")
      // act
      // assert
    });
  });


});
