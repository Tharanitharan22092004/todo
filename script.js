//add task
function addTask() {
    // search for input element with id task-input;
    var task = document.getElementById('task-input').value; 

    //create a new list item
    if(task.trim()!=''){
    var taskItem = document.createElement('div')

    //set task to newly created list element
    taskItem.textContent = task

    taskItem.className="border-4 mt px-2 flex justify-between";

    // how add the task item to the task list
    document.getElementById('task-list').appendChild(taskItem)
    }

   
    //CREATE AND DELETE BUTTON
    var deleteButton = document.createElement('button');

    //SET THE TEXTS TO BUTTON
    deleteButton.textContent = 'Delete';

    //SET CLASS NAME FOR THE BUTTON
    deleteButton.className = ' ml-20 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full items-center justify-between';

    //ADD EVENT LISTENERS TO THE BUTTON
    deleteButton.addEventListener('click', function() {
        // remove the task item from the task list
        taskItem.remove();
        var totalcount = document.getElementById('task-list').childElementCount;
    document.getElementById('totalcount').textContent=totalcount-1;
    });
    //APPEND DELETE BUTTON TO THE TASK ITEM
    taskItem.appendChild(deleteButton);

    //clear the input field
    document.getElementById('task-input').value = '';
    var totalcount = document.getElementById('task-list').childElementCount;
    document.getElementById('totalcount').textContent=totalcount-1;
}

function deleteTask(){
    document.getElementById('task-list').innerHTML = '';
}