const inputBox = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const taskContainer = document.getElementById("tasks");
const message = document.getElementById("message");

addButton.addEventListener("click", addNewTask);

function addNewTask() {

    let taskValue = inputBox.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task container
    const task = document.createElement("div");
    task.className = "task";

    // Create task name
    const taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.innerText = taskValue;

    // Create buttons container
    const buttonArea = document.createElement("div");
    buttonArea.className = "task-buttons";

    // Create complete button
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "done";

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "remove";

    // Complete button functionality
    completeButton.addEventListener("click", function () {

        taskName.classList.toggle("finished");

        if (taskName.classList.contains("finished")) {
            completeButton.innerText = "Completed";
        } else {
            completeButton.innerText = "Complete";
        }

    });

    // Delete button functionality
    deleteButton.addEventListener("click", function () {

        task.remove();

        if (taskContainer.children.length === 0) {
            message.style.display = "block";
        }

    });

    // Add buttons to button area
    buttonArea.appendChild(completeButton);
    buttonArea.appendChild(deleteButton);

    // Add task name and buttons to task
    task.appendChild(taskName);
    task.appendChild(buttonArea);

    // Add task to webpage
    taskContainer.appendChild(task);

    // Hide empty message
    message.style.display = "none";

    // Clear input
    inputBox.value = "";
}
