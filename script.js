console.log("hey");
function addtask() {
    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
}
function remove() {
    const taskList = document.getElementById('taskList');
    if (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.lastChild);
    }
}