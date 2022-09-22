function Tasks(taskId, taskName) {
  this.taskId = taskId;
  this.taskName = taskName;
}

let tasks = [];

let doneTasks = [];

let addTask = (taskId, taskName) => {
  if (!taskName) {
    alert("Please enter a task name");
    return;
  } else {
    console.log(taskId, taskName);
    let task = new Tasks(taskId, taskName);
    tasks.push(task);
    console.log(tasks);

    displayTasks(tasks);
    resetForm();
  }
};
let removeTask = (id) => {
  tasks = tasks.filter((task) => {
    return task.taskId !== id;
  });
  console.log(tasks);
  displayTasks(tasks);
};
let tranTask = (name) => {
  doneTasks.push(
    ...tasks.map((task) => {
      return task.taskName === name;
    })
  );
  console.log(doneTasks);
};

//==========================================
let displayTasks = (tasks) => {
  let html = tasks.reduce((result, task) => {
    return (
      result +
      `
      <li>
      ${task.taskName}
      <i id="checkBtn" data-name="${task.taskName}" class="fa-solid fa-check"></i>
      <i data-id="${task.taskId}" class="fa-light fa-trash"></i>
      </li>
      `
    );
  }, "");
  dom("#todo").innerHTML = html;
};

let resetForm = () => {
  dom("#taskName").value = "";
};
let dom = (selector) => {
  return document.querySelector(selector);
};

//===============================
dom("#addTask").addEventListener("click", () => {
  let taskName = dom("#taskName").value;
  let taskId = String(Date.now());
  addTask(taskId, taskName);
});
dom("#todo").addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  if (!id) return;
  removeTask(id);
});
dom("#todo").addEventListener("click", (e) => {
  let name = e.target.getAttribute("data-name");
  if (!name) return;
  tranTask(name);
});