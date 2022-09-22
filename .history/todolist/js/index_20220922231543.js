let tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#taskName");
let doneTasks = [];

let addTask = (taskId, taskName) => {
  if (!taskName) {
    alert("Please enter a task name");
    return;
  }

  const li = document.createElement("li");
  li.setAttribute("task", taskId);
  li.innerHTML = `
       <p>${taskName}</p>
       <i data-type="${taskName}" class="fa-solid fa-check"></i>
       <i data-id="${taskId}" class="fa-solid fa-check"></i>
       `;
  todo.appendChild(li);
  tasks.push({ taskId, taskName });
  console.log(tasks);
};
let removeTask = (taskId) => {
  var li = dom(`[task="${taskId}"]`);

  let index = tasks.indexOf(taskId);
  tasks.splice(index, 1);
  console.log(tasks);
  li.remove();
};

let checkTasks = (taskName) => {
  const doneLi = document.createElement("li");
  doneLi.setAttribute("data-type", taskName);
  doneLi.innerHTML = `
        <p>${taskName}</p>
  `;
};

function dom(selector) {
  return document.querySelector(selector);
}
//===============================
dom("#addTask").addEventListener("click", (e) => {
  e.preventDefault();
  let taskName = newTask.value;
  let taskId = String(Date.now());
  addTask(taskId, taskName);
});
dom("#todo").addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  let name = e.target.getAttribute("data-name");
  if (!name) return;
  if (!id) return;
  removeTask(id);
});
