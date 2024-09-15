const taskInput = document.getElementById("taskInput");
const taskEditor = document.getElementById('task-editor');
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


// Event Listeners
addTaskBtn.addEventListener("click", addTask);


// Add a new task
function addTask() {
    if (taskInput.value.trim() === "") return;

    // Create elements
    const li = document.createElement("li");
    const div = document.createElement('div');
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    


    // Create buttons
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("completeBtn");

    // Append to list item
    li.appendChild(taskText);
    li.appendChild(div);
    div.appendChild(completeBtn);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Event listeners for buttons
    completeBtn.addEventListener("click", () => markAsCompleted(taskText));
    editBtn.addEventListener("click", () => editTask(taskText));
    deleteBtn.addEventListener("click", () => li.remove());
}

// Mark a task as completed
function markAsCompleted(taskText) {
    taskText.classList.toggle("completed");
}

// Edit a task
function editTask(taskText) {
    taskEditor.innerHTML = '';

    // Create input field and save button
    const input = document.createElement('input');
    const submitButton = document.createElement('button');

    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Update";
    submitButton.classList.add("SaveButton");

    input.setAttribute('type', 'text');
    input.setAttribute('id', 'editTask');
    input.value = taskText.textContent;

    // Append input and save button to the task editor
    taskEditor.appendChild(input);
    taskEditor.appendChild(submitButton);

    // Event listener for saving the edited task
    submitButton.addEventListener('click', () => updateTask(taskText, input.value));
}

// Update task with new content
function updateTask(taskText, newValue) {
    if (newValue.trim() === '') return; 
    taskText.textContent = newValue;
    
    // Clear the task editor after updating the task
    taskEditor.innerHTML = '';
}
