let btnAddTask = dom("#addTask");

btnAddTask.addEventListener("click", function () {
let taskName = dom("#taskName");
  if(taskName==='') {
    alert("Hãy nhập công việc");
  }
  )};


function dom(selector) {
  return document.querySelector(selector);
}
