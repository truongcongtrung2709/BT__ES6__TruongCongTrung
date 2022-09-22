let btnAddTask = dom("#addTask");

btnAddTask.addEventListener("click", function () {
  const taskName = dom("#taskName");
});

function dom(selector) {
  return document.querySelector(selector);
}
