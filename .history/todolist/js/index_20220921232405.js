let btnAddTask = dom("#addTask");
let taskName = dom("#taskName");

btnAddTask.addEventListener("click", function () {
  if (!taskName.value) {
    alert("Vui lòng nhập tên công việc");
    return false;
  }
  let tasks = [];
});
function dom(selector) {
  return document.querySelector(selector);
}
