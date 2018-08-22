const assert = require("assert");
const Task = require("../task.js");

let task;

describe("Task", function(){
  beforeEach(function(){
    task = new Task("transform", "easy", "critical", "5 points", "completed")
  });

  it("should have a name", function(){
    // arrange
    // act
    const actual = task.name;
    // assert
    assert.strictEqual(actual, "transform");
  });

  it("should have a difficulty level", function(){
    // arrange
    // act
    const actual = task.difficulty;
    // assert
    assert.strictEqual(actual, "easy");
  });

  it("should have an urgency level", function(){
    // arrange
    // act
    const actual = task.urgency;
    // assert
    assert.strictEqual(actual, "critical");
  });

  it("should have a reward", function(){
    // arrange
    // act
    const actual = task.reward;
    // assert
    assert.strictEqual(actual, "5 points")
  });

  it("should be able to be marked as completed", function(){
    // arrange
    // act
    const actual = task.isCompleted();
    // assert
    assert.strictEqual(actual, true)
  });

  it("should be able to be marked as not completed", function(){
    // arrange
    task = new Task("Battle Cat attack", "moderate", "medium", "5 points", "not completed")
    // act
    const actual = task.isCompleted();
    // assert
    assert.strictEqual(actual, false)
  });

})
