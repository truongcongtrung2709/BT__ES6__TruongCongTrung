let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#newTask").value;

let addTask = () => {
  if (!newTask) {
    alert("Vui lòng nhập công việc");
    return;
  }
};

function dom(selector) {
  return document.querySelector(selector);
}
