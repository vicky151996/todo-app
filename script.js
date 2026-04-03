function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  // delete button
  let btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}