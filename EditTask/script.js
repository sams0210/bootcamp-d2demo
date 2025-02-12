// Selecting elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    // task holder
    let taskSpan = document.createElement("span"); 
    taskSpan.textContent = taskText;

    // Create Edit button
  
    // edit event listener
   

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", function () {
         taskList.removeChild(li);
     });

  li.appendChild(taskSpan);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
}

// Event Listener
addTaskButton.addEventListener("click", addTask);
