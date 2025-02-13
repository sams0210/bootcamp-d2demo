// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");



// Function to add a task
function addTask() {
    let taskText = taskInput.value.trim();         

    // take task text
let li = document.createElement("li");
li.textContent = taskText;
taskList.appendChild(li);
    // Append task

    
    // Clear input
}

// Event Listener
 addTaskButton.addEventListener("click", addTask);