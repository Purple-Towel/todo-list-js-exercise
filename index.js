// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      const title = this.title;
      const complete = this.complete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
//function completeTask(object) {
//  object['complete'] = true;
//}

// Print the state of a task to the console in a nice readable way
/*function logTaskState(object) {
  const title = object['title'];
  const complete = object['complete'];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}
*/
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Clean at 12pm");
const task2 = newTask("Do Laundry", "Do at 1pm");
const tasks = [task1, task2];

console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
