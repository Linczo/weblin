<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    #taskInput {
      width: 60%;
      padding: 8px;
      margin-right: 10px;
    }

    #addTaskBtn, #completeAllBtn, #deleteCompletedBtn {
      padding: 8px;
      cursor: pointer;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      margin: 8px 0;
    }

    .taskText {
      flex-grow: 1;
      margin-right: 10px;
    }

    .completed {
      text-decoration: line-through;
      color: #888;
    }
  </style>
</head>
<body>

<h1>Task Manager</h1>

<input type="text" id="taskInput" placeholder="Add a new task">
<button onclick="addTask()" id="addTaskBtn">Add Task</button>
<button onclick="completeAllTasks()" id="completeAllBtn">Complete All</button>
<button onclick="deleteCompletedTasks()" id="deleteCompletedBtn">Delete Completed</button>

<ul id="taskList"></ul>

<script>
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('taskInput');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <span class="taskText">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }

  function completeTask(checkbox) {
    const taskText = checkbox.nextSibling.nextSibling;
    taskText.classList.toggle('completed', checkbox.checked);
  }

  function completeAllTasks() {
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
      completeTask(checkbox);
    });
  }

  function deleteTask(deleteBtn) {
    const li = deleteBtn.parentNode;
    li.parentNode.removeChild(li);
  }

  function deleteCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(completedTask => {
      const li = completedTask.parentNode;
      li.parentNode.removeChild(li);
    });
  }
</script>

</body>
</html>
