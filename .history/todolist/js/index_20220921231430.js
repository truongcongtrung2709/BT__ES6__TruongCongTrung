let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#newTask").value;

let addTask = () => {
  if (!newTask) {
    alert("Vui lòng nhập công việc");
    return;
  }
  let tasks = [];

  tasks.push({ name: newTask });
  console.log(tasks);
  newTask = "";
};

function dom(selector) {
  return document.querySelector(selector);
}
