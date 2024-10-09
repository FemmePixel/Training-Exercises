document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        createTask(todoInput.value);
        todoInput.value = '';
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            deleteTask(event.target.parentElement);
        }
    });

    todoList.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            toggleTaskCompletion(event.target);
        }
    });

    function createTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }

    function toggleTaskCompletion(checkbox) {
        const taskText = checkbox.nextSibling; // The span containing the task text
        if (checkbox.checked) {
            taskText.classList.add('completed');
        } else {
            taskText.classList.remove('completed');
        }
    }
});
