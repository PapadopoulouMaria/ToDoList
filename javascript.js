const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const clearCompleteBtn = document.getElementById('clearCompleteBtn');
const checklist = document.getElementById('checklist');
const taskCount = document.getElementById('taskCount');


addTaskBtn.addEventListener('click', function() {
    if (taskInput.value !== '') {
        addTask(taskInput.value); 
        taskInput.value = ''; 
    }
});


function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <label class="box">
            <input type="checkbox" checked="checked">
            <div class="checkmark"></div>
            ${taskText}
        </label>
    `;
    checklist.appendChild(taskItem); 
    updateTaskCount(); 
}


deleteTaskBtn.addEventListener('click', function() {
    const checkedTasks = checklist.querySelectorAll('input[type="checkbox"]:checked');
    checkedTasks.forEach(function(task) {
        task.parentElement.parentElement.remove(); 
    });
    updateTaskCount(); 
});


clearCompleteBtn.addEventListener('click', function() {
    const completedTasks = checklist.querySelectorAll('input[type="checkbox"]:checked');
    completedTasks.forEach(function(task) {
        task.parentElement.parentElement.remove(); 
    });
    updateTaskCount(); 
});

function updateTaskCount() {
    const totalTasks = checklist.querySelectorAll('input[type="checkbox"]').length;
    const completedTasks = checklist.querySelectorAll('input[type="checkbox"]:checked').length;
    taskCount.textContent = `Total Tasks: ${totalTasks}, Completed Tasks: ${completedTasks}`;
}
