const assert = require("assert")
const Hero = require("../hero.js")

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

});
