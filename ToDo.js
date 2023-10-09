const form = document.querySelector('#new-tasks');
const input = document.querySelector('#new-todos');
const newAddedTasks = document.querySelector('#toDo-list');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newTask = document.createElement('li');
    const newListButton = document.createElement('button');
    newListButton.innerText = 'completed';
    const newTaskText = document.createElement('span');
    newTaskText.innerText = input.value;
    newTask.appendChild(newTaskText);
    newTask.appendChild(newListButton);
    input.value = '';
    newAddedTasks.appendChild(newTask);
});



newAddedTasks.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        toggleTextThroughClass(e.target);
    } else if (e.target.tagName === 'BUTTON') {
        const listItem = e.target.parentElement;
        listItem.remove();
    }
});


 function toggleTextThroughClass(e) {
     e.classList.toggle('textThrough');
 }











