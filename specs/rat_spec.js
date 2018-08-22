const assert = require("assert")
const Rat = require("../rat.js")
const Food = require("../food.js")

describe("Rat", function(){
  let rat;
  beforeEach(function(){
    rat = new Rat("Roland");
  });

  it("should have a name", function(){
    assert.strictEqual(rat.name, "Roland");
  });

  it("should make food poisonous if touched", function(){
    let food = new Food("Pizza", 20);
    rat.touchFood(food);
    assert.strictEqual(food.isPoisonous, true)
  });

})
