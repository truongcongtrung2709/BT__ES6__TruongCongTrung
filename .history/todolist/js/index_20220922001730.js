let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");

let addTask = () => {
  let newTask = dom("#taskName").value;

  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.setAttribute("data-id", taskId);
  li.innerText = newTask;
  todo.appendChild(li);

  const checkIcon = document.createElement("i");
  checkIcon.setAttribute("class", "fa-solid fa-check");
  li.append(icon);
};

function dom(selector) {
  return document.querySelector(selector);
}
