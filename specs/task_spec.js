const assert = require("assert");
const Task = require("../task.js");

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
    assert.strictEqual(actual, "That's one thing completed!")
  });

  it("should be able to be marked as not completed", function(){
    // arrange
    task = new Task("Battle Cat attack", "moderate", "medium", "5 points", "not completed")
    // act
    const actual = task.isCompleted();
    // assert
    assert.strictEqual(actual, "not completed")
  });

  xit("should be able to sort tasks by difficulty", function(){
    // arrange
    task = new Task("transform", "easy", "critical", "5 points", "completed");
    task = new Task("Battle Cat attack", "moderate", "medium", "20 points", "not completed")
    task = new Task("swing sword", "challenging", "high", "15 points", "completed")
    // act

    // assert
  });

  xit("should be able to sort tasks by urgency", function(){
    // arrange
    task = new Task("transform", "easy", "critical", "5 points", "completed");
    task = new Task("Battle Cat attack", "moderate", "medium", "20 points", "not completed")
    task = new Task("swing sword", "challenging", "high", "15 points", "completed")
    // act
    // assert
  });

  xit("should be able to sort tasks by reward", function(){
    // arrange
    task = new Task("transform", "easy", "critical", "5 points", "completed");
    task = new Task("Battle Cat attack", "moderate", "medium", "20 points", "not completed")
    task = new Task("swing sword", "challenging", "high", "15 points", "completed")
    // act
    // assert
  });

})
