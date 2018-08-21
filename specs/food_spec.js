const assert = require("assert");
const Food = require("../food.js")
const Hero = require("../hero.js")

describe("Food", function(){
  beforeEach(function(){
    food = new Food("apples");
  });

  it("should have a name", function(){
    // arrange
    // act
    const actual = food.name;
    // assert
    assert.strictEqual(actual, "apples");
  });

  xit("should have a replenishment value", function(){
    // arrange
    // act
    // assert
  });

})
