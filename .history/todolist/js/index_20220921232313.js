let btnAddTask = dom("#addTask");
let taskName = dom("#taskName");
function dom(selector) {
  return document.querySelector(selector);
}
btnAddItem.addEventListener("click", function () {
  if (!taskName.value) {
    alert("Vui lòng nhập tên công việc");
    return false;
  }
});
