let btnAddTask = dom("#addTask");

btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  const taskName = dom("#taskName");
  if (taskName.value === "") {
    alert("Please enter a task name");
    return;
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
        <p>${taskName}</p>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-trash"></i>
    `;
  }
});

function dom(selector) {
  return document.querySelector(selector);
}
