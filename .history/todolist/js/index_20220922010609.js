let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#taskName");

let addTask = () => {
  let newTaskVal = newTask.value;
  let taskId = String(Date.now());
  if (!newTaskVal) {
    alert("Please enter a task name");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTaskVal}</p>
    <i    class="fa-solid fa-check"></i>
    <i  data-id="${taskId}" class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);
};

let removeTask = (id) => {
  let li = dom(`[data-id="'${id}'"]`);
  ul.removeChild(li);
};

todo.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  console.log(id);
  if (!id) return;
  removeTask(id);
});

//===============================
function dom(selector) {
  return document.querySelector(selector);
}
