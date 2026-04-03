let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    // task text
    let span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    // toggle complete
    span.onclick = function () {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
    };

    // delete button
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = function () {
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  input.focus(); // UX improvement

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// press Enter to add task
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// initial load
renderTasks();
