let btnAddTask = dom("#addTask");
let taskName = dom("#taskName");

btnAddTask.addEventListener("click", function () {
  if (!taskName.value) {
    alert("Vui lòng nhập tên công việc");
    return false;
  }
  let tasks = [];
  tasks.push({ name: taskName.value });
  taskName.value = "";

  displayTask(tasks);
});
function displayTask(tasks = []) {
  let content = dom("#todo");
  tasks.forEach((task) => {
    content.innerHTML = `
    <li>${task.name}
    <i class="fa-thin fa-check"></i>
    </li>
    `;
  });
}

function dom(selector) {
  return document.querySelector(selector);
}
