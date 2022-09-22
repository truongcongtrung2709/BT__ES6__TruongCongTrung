let btnAddTask = dom("#addTask");

btnAddTask.addEventListener("click", () => {
  const taskName = dom("#taskName");
  if (taskName.value === "") {
    alert("Please enter a task name");
    return;
  } else {
    const li = dom("li");
  }
});

function dom(selector) {
  return document.querySelector(selector);
}
