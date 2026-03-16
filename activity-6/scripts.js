// ========================================
// Activity 6: Function and Scope Demonstrations
// ========================================

console.log("=== Activity 6: Function and Scope Demonstrations ===\n");

console.log("=== FUNCTION DEMONSTRATIONS ===");
console.log("Testing different function types:");

// Function declaration
function declarationExample(msg) {
    console.log("Function declaration:", msg);
    console.log("Processed:", msg);
}

// Function expression
const expressionExample = function (msg) {
    console.log("Function expression:", msg);
    console.log("Processed:", msg);
};

// Arrow function
const arrowExample = (msg) => {
    console.log("Arrow function:", msg);
    console.log("Processed:", msg);
};

declarationExample("Hello from declaration");
expressionExample("Hello from expression");
arrowExample("Hello from arrow");

console.log("\n=== SCOPE DEMONSTRATIONS ===");

let globalMessage = "I'm global";

function scopeTest() {

    let localMessage = "I'm local";

    console.log("Inside function:");
    console.log("- Can access global:", globalMessage);
    console.log("- Can access local:", localMessage);

    function nestedScope() {

        let nestedMessage = "I'm nested";

        console.log("Inside nested function:");
        console.log("- Can access global:", globalMessage);
        console.log("- Can access local:", localMessage);
        console.log("- Can access nested:", nestedMessage);
    }

    nestedScope();
}

scopeTest();

console.log("Outside function:");
console.log("- Can access global:", globalMessage);

console.log("\n=== Function demonstrations complete! ===");
console.log("Check the to-do list below for the enhanced application.\n");


// ========================================
// Activity 6: Enhanced To-Do List Application
// ========================================

console.log("=== Activity 6: Enhanced To-Do List Application ===");
console.log("Initializing event listeners...");


// ============================
// Application State
// ============================

const todoState = {
    tasks: [],
    nextId: 1,
    filter: "all",
    sortMode: "created"
};


// ============================
// Update Statistics
// ============================

function updateStats() {

    const total = todoState.tasks.length;
    const completed = todoState.tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById("totalTasks").textContent = `Total: ${total}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pending}`;

    document.getElementById("taskCount").textContent =
        `(${total} task${total !== 1 ? "s" : ""})`;

    const empty = document.getElementById("emptyState");
    empty.style.display = total === 0 ? "block" : "none";

    console.log(`Stats updated - Total: ${total}, Completed: ${completed}, Pending: ${pending}`);
}


// ============================
// Create Task Element
// ============================

function createTaskElement(task) {

    const li = document.createElement("li");
    li.className = "task-item";
    li.dataset.id = task.id;

    if (task.completed) li.classList.add("completed");

    const priorityBar = document.createElement("div");
    priorityBar.className = `task-priority priority-${task.priority}`;
    li.appendChild(priorityBar);

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;
    li.appendChild(text);

    const time = document.createElement("span");
    time.className = "task-timestamp";
    time.textContent = task.created.toLocaleTimeString();
    li.appendChild(time);

    const status = document.createElement("span");
    status.className = "task-status";
    status.textContent = task.completed ? "✓ Done" : "⌛ Pending";
    li.appendChild(status);

    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "Delete";
    li.appendChild(del);


    // Toggle completion
    li.addEventListener("click", e => {
        if (!e.target.classList.contains("delete-btn")) {

            task.completed = !task.completed;
            li.classList.toggle("completed");
            status.textContent = task.completed ? "✓ Done" : "⌛ Pending";

            updateStats();
            applyFilter();
        }
    });

    // Delete task
    del.addEventListener("click", e => {
        e.stopPropagation();
        if (confirm(`Delete task "${task.text}"?`)) {
            removeTask(task.id);
        }
    });

    // Double click edit
    text.addEventListener("dblclick", () => {
        const updated = prompt("Edit task:", task.text);
        if (updated && updated.trim() !== "") {
            task.text = updated.trim();
            text.textContent = task.text;
        }
    });

    return li;
}


// ============================
// Add Task
// ============================

function addTask(text, priority = "medium") {

    text = text.trim();

    if (!text) {
        alert("Please type a task!");
        return;
    }

    const task = {
        id: todoState.nextId++,
        text,
        completed: false,
        priority,
        created: new Date()
    };

    todoState.tasks.push(task);

    const li = createTaskElement(task);
    document.getElementById("todo-list").appendChild(li);

    updateStats();
    applyFilter();
}


// ============================
// Remove Task
// ============================

function removeTask(id) {

    todoState.tasks = todoState.tasks.filter(t => t.id !== id);

    const li = document.querySelector(`[data-id="${id}"]`);
    if (li) li.remove();

    updateStats();
    applyFilter();
}


// ============================
// Filtering Logic
// ============================

function applyFilter() {

    todoState.tasks.forEach(task => {

        const li = document.querySelector(`[data-id="${task.id}"]`);
        if (!li) return;

        if (todoState.filter === "pending") {
            li.style.display = task.completed ? "none" : "flex";
        }
        else if (todoState.filter === "completed") {
            li.style.display = task.completed ? "flex" : "none";
        }
        else {
            li.style.display = "flex";
        }

    });

}


// ============================
// Sorting
// ============================

function sortTasks(mode) {

    todoState.sortMode = mode;

    if (mode === "priority") {

        const order = { high: 1, medium: 2, low: 3 };

        todoState.tasks.sort((a, b) =>
            order[a.priority] - order[b.priority]
        );

    } else {

        todoState.tasks.sort((a, b) =>
            a.created - b.created
        );

    }

    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    todoState.tasks.forEach(task => {
        list.appendChild(createTaskElement(task));
    });

    applyFilter();
}


// ============================
// Event Listeners
// ============================

document.getElementById("addTaskBtn").addEventListener("click", () => {

    const input = document.getElementById("taskInput");
    const priority = document.getElementById("prioritySelect").value;

    addTask(input.value, priority);

    input.value = "";
    input.focus();

});


document.getElementById("taskInput").addEventListener("keydown", e => {

    if (e.key === "Enter") {

        const priority = document.getElementById("prioritySelect").value;
        addTask(e.target.value, priority);

        e.target.value = "";

    }

});


// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".filter-btn")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        todoState.filter = btn.dataset.filter;

        applyFilter();

    });

});


// Bulk actions
document.getElementById("markAllDoneBtn").addEventListener("click", () => {

    todoState.tasks.forEach(t => t.completed = true);

    sortTasks(todoState.sortMode);
    updateStats();

});


document.getElementById("deleteCompletedBtn").addEventListener("click", () => {

    const completed = todoState.tasks.filter(t => t.completed);

    if (!completed.length) {
        alert("No completed tasks to delete!");
        return;
    }

    if (confirm("Delete all completed tasks?")) {
        completed.forEach(t => removeTask(t.id));
    }

});


document.getElementById("clearAllBtn").addEventListener("click", () => {

    if (!todoState.tasks.length) {
        alert("No tasks to clear!");
        return;
    }

    if (confirm("Delete all tasks?")) {
        [...todoState.tasks].forEach(t => removeTask(t.id));
    }

});


// Optional sorting
document.getElementById("sortPriorityBtn")?.addEventListener("click",
    () => sortTasks("priority"));

document.getElementById("sortCreatedBtn")?.addEventListener("click",
    () => sortTasks("created"));


// ============================
// Initialization Complete
// ============================

console.log("Event listeners initialized successfully!");
updateStats();
console.log("Application initialized successfully!");
console.log("Try adding tasks with different priorities and using the filter/bulk operations!");