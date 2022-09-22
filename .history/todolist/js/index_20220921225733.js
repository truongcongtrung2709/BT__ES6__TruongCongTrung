let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");

let addTask = () => {
  let newTask = dom("#newTask").value;

  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.setAttribute("data-id", taskId);
  li.innerHTML = `
  <li>${newTask}</li>
  `;
  //   todo.appendChild(li);

  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-thin fa-check");
  li.append(icon);
};

function dom(selector) {
  return document.querySelector(selector);
}
