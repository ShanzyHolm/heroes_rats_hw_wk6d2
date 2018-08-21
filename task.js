const Task = function(name, difficulty, urgency, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
}
// 
// difficulty = ["easy", "moderate", "challenging", "demanding", "strenuous"]
// urgency = ["low", "medium", "high", "critical"]

module.exports = Task;
