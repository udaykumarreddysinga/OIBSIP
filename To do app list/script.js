const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&times;";
    li.appendChild(deleteButton);

    // Add to list
    listContainer.appendChild(li);
    inputBox.value = "";

    saveTasks();
}

// Event delegation for checking and deleting tasks
listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveTasks();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveTasks();
    }
});

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#list-container li").forEach((li) => {
        tasks.push({
            text: li.textContent.replace("×", "").trim(),
            checked: li.classList.contains("checked"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.checked) {
            li.classList.add("checked");
        }

        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "&times;";
        li.appendChild(deleteButton);

        listContainer.appendChild(li);
    });
}

// Initialize app
loadTasks();
