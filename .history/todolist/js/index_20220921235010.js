let btnAddTask = dom("#addTask");

btnAddTask.addEventListener("click", function () {
  const taskName = dom("#taskName");
  if (taskName.value === "") {
    alert("Please enter a task name");
    return;
  }
});

function dom(selector) {
  return document.querySelector(selector);
}
