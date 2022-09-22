let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#taskName");

let taskId = String(Date.now());

let addTask = () => {
  let newTaskVal = newTask.value;
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTaskVal}</p>
    <i onclick="doneTask()" id="check"  class="fa-solid fa-check"></i>
    <i onclick="removeTask()" class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);
};

let doneTask = () => {};
let removeTask = () => {};

//===============================
function dom(selector) {
  return document.querySelector(selector);
}
