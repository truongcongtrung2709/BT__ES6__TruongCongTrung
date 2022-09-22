class Tasks {
  contructor(taskId, taskName) {
    this.taskId = taskId;
    this.taskName = taskName;
  }
}

let tasks = [];

let doneTasks = [];

let addTask = (index) => {
  if (!taskName) {
    alert("Please enter a task name");
    return;
  }
  let todo = dom("#todo");
  let taskName = dom("#taskName").value;
  let taskId = String(Date.now());

  let tasks = new Tasks(taskId, taskName);
};
