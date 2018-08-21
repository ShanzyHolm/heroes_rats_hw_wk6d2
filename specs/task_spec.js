const assert = require("assert");
const Task = require("../task.js")

describe("Task", function(){
  beforeEach(function(){
    task = new Task("transform", "easy")
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

  xit("should have an urgency level", function(){
    // arrange
    // act
    // assert
  });

  xit("should have a reward", function(){
    // arrange
    // act
    // assert
  });

  xit("should be able to be marked as completed", function(){
    // arrange
    // act
    // assert
  });
})
