
console.log("=== Interactive To-Do List Demo ===");

// Global Variables
let tasks = [];
let taskIdCounter = 1;

const outputDiv = document.getElementById("output");


// Part A: Element Creation Demonstrations
console.log("\n--- Part A: Element Creation ---");

// Create demo elements
const demoDiv = document.createElement("div");
const demoSpan = document.createElement("span");
const demoButton = document.createElement("button");

console.log("Created div:", demoDiv);
console.log("Created span:", demoSpan);
console.log("Created button:", demoButton);

// Set properties
demoDiv.textContent = "This is a demo div";
demoDiv.id = "demo-div";
demoSpan.innerHTML = "<strong>Demo span with HTML content</strong>";
demoButton.textContent = "Demo Button";

console.log("Div after properties:", demoDiv);


// Part B: Element Styling Demonstrations
console.log("\n--- Part B: Styling ---");


demoDiv.style.backgroundColor = "#00aaff"; 
demoDiv.style.color = "#ffffff"; 
demoDiv.style.padding = "10px";
demoDiv.style.borderRadius = "8px";
demoDiv.style.marginBottom = "10px";

console.log("Styled demo div");

// Class list manipulation
demoDiv.classList.add("demo-box");
console.log("After adding class demo-box:", demoDiv.classList);
demoDiv.classList.toggle("active");
console.log("Toggled 'active' class:", demoDiv.classList);

// Add spacing for demo elements
demoSpan.style.display = "block";
demoSpan.style.marginTop = "10px";
demoButton.style.display = "block";
demoButton.style.marginTop = "10px";

// Part C: Element Appending Demonstrations
console.log("\n--- Part C: Appending ---");

// Append demo elements to output div
outputDiv.appendChild(demoDiv);
outputDiv.appendChild(demoSpan);
outputDiv.appendChild(demoButton);

console.log("Output div children count:", outputDiv.children.length);

// Part D: To-Do List Core Functionality
console.log("\n--- Part D: To-Do List Functionality ---");

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    console.log(`Adding task: "${text}"`);

    if (text === "") {
        alert("Please enter a task!");
        console.log("Task not added: input empty");
        return;
    }

    const task = {
        id: taskIdCounter++,
        text: text,
        completed: false
    };

    tasks.push(task);
    console.log("Task added:", task);

    const li = createTaskElement(task);
    document.getElementById("todo-list").appendChild(li);

    input.value = "";
    updateTaskStats();
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-task-id", task.id);

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = task.text;

    const statusSpan = document.createElement("span");
    statusSpan.className = "task-status";

    if (task.completed) {
        li.classList.add("done");
        statusSpan.textContent = "✓ Done";
        statusSpan.classList.add("status-done");
    } else {
        statusSpan.textContent = "⌛ Pending";
        statusSpan.classList.add("status-pending");
    }

    li.appendChild(textSpan);
    li.appendChild(statusSpan);

    li.onclick = () => toggleTaskCompletion(task.id);

    console.log("Created task element:", li);
    return li;
}

// Part E: Task State Management
function toggleTaskCompletion(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.completed = !task.completed;
    console.log(`Task "${task.text}" completion toggled:`, task.completed);

    const li = document.querySelector(`[data-task-id="${id}"]`);
    const status = li.querySelector(".task-status");

    if (task.completed) {
        li.classList.add("done");
        status.textContent = "✓ Done";
        status.className = "task-status status-done";
    } else {
        li.classList.remove("done");
        status.textContent = "⌛ Pending";
        status.className = "task-status status-pending";
    }

    updateTaskStats();
}

function updateTaskStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById("taskCount").textContent = `(${total} task${total !== 1 ? "s" : ""})`;
    document.getElementById("totalTasks").textContent = `Total: ${total}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pending}`;

    console.log(`Stats - Total: ${total}, Completed: ${completed}, Pending: ${pending}`);
}

// Allow pressing Enter to add a task
document.getElementById("taskInput").onkeydown = (event) => {
    if (event.key === "Enter") addTask();
};

// Initial demo content
outputDiv.innerHTML = `
    <h3>DOM Demonstration Loaded</h3>
    <p>Thanks for visiting...</p>
    <p>Start adding tasks below!</p>
`;

console.log("Interactive To-Do List initialized!");
