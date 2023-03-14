window.addEventListener('load', () => {
    const form = document.getElementsByClassName('newTasks')[0];
    const input = document.getElementById('newTaskInput');
    const listElement = document.getElementsByClassName('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert('Please fill out a task!');
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskElementContent = document.createElement('div');
        taskElementContent.classList.add('content');
        taskElementContent.innerText = task;

        taskElement.appendChild(taskElementContent);

        listElement.appendChild(taskElement);
    })
})