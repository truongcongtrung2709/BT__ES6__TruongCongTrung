let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");
let newTask = dom("#taskName");

let addTask = () => {
  let newTaskVal = newTask.value;
  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTaskVal}</p>
    <i  data-id="${taskId}"  class="fa-solid fa-check"></i>
    <i  data-id="${taskId}" class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);
};

let removeTask = (id) => {
    let li = dom(`[data-id="${id}'"]`)
}

todo.addEventListener("click", e =>{
    let id =  e.target.getAttribute('data-id');
    if(!id) return;
}



//===============================
function dom(selector) {
  return document.querySelector(selector);
}
