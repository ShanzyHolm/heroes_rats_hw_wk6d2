const assert = require("assert")
const Hero = require("../hero.js")

describe("Hero", function() {
  beforeEach(function(){
    hero = new Hero ("He-Man");
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
    // assert
  });

  it("should have a favourite food", function(){
    // arrange
    // act
    // assert
  });

  it("should say their name", function(){
    // arrange
    // act
    // assert
  });

  it("should have a collection of tasks to complete", function(){
    // arrange
    // act
    // assert
  });

});
