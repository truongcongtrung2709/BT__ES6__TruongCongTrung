let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");

let addTask = () => {
  let newTask = dom("#taskName").value;

  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTask}</p>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);
};
//===============================
function dom(selector) {
  return document.querySelector(selector);
}
