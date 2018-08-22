const Task = function(name, difficulty, urgency, reward, completed) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed
}

Task.prototype.isCompleted = function() {
  if (task.completed === "completed") {
    return `That's one thing ${task.completed}!`
  };
}

// Task.prototype.isCompleted = function() {
  // if (this.completed === completed) {
  //   return `That's one thing ${this.completed}!`
  // };
  // else {
  //   return `So much to do, and so little time!`
  // };
// }

//
// difficulty = ["easy", "moderate", "challenging", "demanding", "strenuous"]
// urgency = ["low", "medium", "high", "critical"]

module.exports = Task;
