let Tasks = [];
let todo = dom("#todo");
let completed = dom("#completed");

let addTask = () => {
  let newTask = dom("#taskName").value;

  let taskId = String(Date.now());

  const li = document.createElement("li");
  li.innerHTML = `
    <p>${newTask}</p>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-check"></i>
    `;
  todo.appendChild(li);

  //   li.setAttribute("data-id", taskId);
  //   li.innerText = newTask;
  //   todo.appendChild(li);

  //   const checkIcon = document.createElement("i");
  //   checkIcon.setAttribute("class", "fa-solid fa-check");
  //   li.append(checkIcon);

  //   const removeIcon = document.createElement("i");
  //   removeIcon.setAttribute("class", "fa-solid fa-check");
  //   li.append(removeIcon);
};
//===============================
function dom(selector) {
  return document.querySelector(selector);
}
