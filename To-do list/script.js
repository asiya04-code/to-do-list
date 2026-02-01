function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // Task text
    const span = document.createElement("span");
    span.textContent = " " + text + " ";

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}