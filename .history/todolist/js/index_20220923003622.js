function Tasks(taskId, taskName) {
  this.taskId = taskId;
  this.taskName = taskName;
}

let tasks = [];

let doneTasks = [];

let addTask = () => {
  if (!taskName) {
    alert("Please enter a task name");
    return;
  } else {
    let taskName = dom("#taskName").value;
    let taskId = String(Date.now());
    console.log(taskId, taskName);
    let task = new Tasks(taskId, taskName);
    tasks.push(task);
    console.log(tasks);

    displayTasks(tasks);
    resetForm();
  }
};
let displayTasks = (tasks) => {
  let html = tasks.reduce((result, task) => {
    return (
      result +
      `
      <li>
      ${task.taskName}
      <i class="fa-solid fa-check"></i>
      <i class="fa-light fa-trash"></i>
      </li>
      `
    );
  });
};

let resetForm = () => {
  dom("#taskName").value = "";
};
let dom = (selector) => {
  return document.querySelector(selector);
};

//===============================
// dom("#addTask").addEventListener("click", () => {
//   let taskName = dom("#taskName").value;
//   let taskId = String(Date.now());
//   addTask(taskId, taskName);
// });
dom("#todo").addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  let doneId = e.target.getAttribute("data-id");
  if (!doneId) return;
  if (!id) return;
  removeTask(id);
});
