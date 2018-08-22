const assert = require("assert");
const Hero = require("../hero.js");
const Food = require("../food.js");
const Task = require("../task.js");

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
      let task1 = new Task("transform", 1, "critical", "5 points", "completed");
      let task2 = new Task("Battle Cat attack", 5, "medium", "20 points", "not completed");
      let task3 = new Task("swing sword", 3, "high", "15 points", "completed");

      // act
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      const actual = hero.getCompleteTasks();
      // assert
      assert.deepStrictEqual(actual, [task1, task3])
    });

    xit("view tasks marked as not complete", function(){
      // arrange
      // act
      // assert
    });

    it("should be able to sort tasks by difficulty", function(){
      // arrange
      let task1 = new Task("transform", 1, "critical", "5 points", "completed");
      let task2 = new Task("Battle Cat attack", 5, "medium", "20 points", "not completed");
      let task3 = new Task("swing sword", 3, "high", "15 points", "completed");

      // act
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.sortTasks("difficulty");
      // assert
      assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
    });

    it("should be able to sort tasks by urgency", function(){
      // arrange
      let task1 = new Task("transform", "easy", 4, "5 points", "completed");
      let task2 = new Task("Battle Cat attack", "critical", 2, "20 points", "not completed");
      let task3 = new Task("swing sword", "medium", 3, "15 points", "completed");

      // act
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.sortTasks("urgency");
      // assert
      assert.deepStrictEqual(hero.tasks, [task2, task3, task1])
    });

    it("should be able to sort tasks by reward", function(){
      // arrange
      let task1 = new Task("transform", "easy", "critical", 5, "completed");
      let task2 = new Task("Battle Cat attack", "critical", "medium", 20, "not completed");
      let task3 = new Task("swing sword", "medium", "high", 15, "completed");

      // act
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.sortTasks("reward");
      // assert
      assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
    });
  });


});

// xit("should be able to sort tasks by reward", function(){
//   // arrange
//   // act
//   // assert
// });
