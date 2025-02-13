// Selecting elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // Create a Delete button
    
    taskList.removeChild(li);
    
    // Add event listener to delete the task
    
    taskInput.value = ""; // Clear input field
}

// Event Listener
addTaskButton.addEventListener("click", addTask);
