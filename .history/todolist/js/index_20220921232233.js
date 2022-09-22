let btnAddTask = dom("#addTask");
let taskName = dom("#taskName");

btnAddItem.addEventListener("click", function () {
  if (!taskName.value) {
    alert("Vui lòng nhập tên công việc");
  }
});

let dom = (selector) => {
  return document.querySelector(selector);
};
