let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#taskName").value;

let taskId = String(Date.now());

let addTask = () => {
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTask}</p>
    <i onclick="doneTask()" id="check"  class="fa-solid fa-check"></i>
    <i onclick="removeTask()" class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);
};

let doneTask = () => {
  let check = dom("#check");
  check.style = "color: Green";
};
let removeTask = () => {};

//===============================
function dom(selector) {
  return document.querySelector(selector);
}
