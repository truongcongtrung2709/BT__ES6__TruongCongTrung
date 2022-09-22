let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");

let addTask = () => {
  let newTask = dom("#newTask").value;

  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.setAttribute("data-id", taskId);
  li.innerText = newTask;
  todo.appendChild(li);

  const icon = document.createElement("i");
  // icon.setAttribute("class","fa-solid fa-check")
  li.append(icon);
};

function dom(selector) {
  return document.querySelector(selector);
}
