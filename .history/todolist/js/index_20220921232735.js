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
  let content = ``;
}

function dom(selector) {
  return document.querySelector(selector);
}
