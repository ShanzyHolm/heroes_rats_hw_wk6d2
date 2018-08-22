const Task = function(name, difficulty, urgency, reward, completed) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed
}

Task.prototype.isCompleted = function() {
  if (this.completed === "completed") {
    return true
  }
  else {
    return false
  }
}

// Task.prototype.isCompleted = function() {
  // if (this.completed === completed) {
  //   return `That's one thing ${this.completed}!`
  // };
  // else {
  //   return `So much to do, and so little time!`
  // };
// }

//// const difficulty = {
//   "easy" => 1,
//   "moderate" => 2,
//   "challenging" => 3,
//   "demanding" => 4,
//   "strenuous" => 5
// }
//
// urgency = ["low", "medium", "high", "critical"]


module.exports = Task;
// difficulty = ["easy", "moderate", "challenging", "demanding", "strenuous"]
// urgency = ["low", "medium", "high", "critical"]
