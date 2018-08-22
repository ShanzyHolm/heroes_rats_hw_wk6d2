const assert = require("assert");
const Food = require("../food.js");

describe("Food", function(){
  beforeEach(function(){
    food = new Food("apples", 10);
  });

  it("should have a name", function(){
    // arrange
    // act
    const actual = food.name;
    // assert
    assert.strictEqual(actual, "apples");
  });

  it("should have a replenishment value", function(){
    // arrange
    // act
    const actual = food.replenishment;
    // assert
    assert.strictEqual(actual, 10);
  });

})
