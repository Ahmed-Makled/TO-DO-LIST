/* 
    student task:
    1- use sweet alert if input is empty
    2- check if task exit
    3- creat  Delete all task button
    4- creat finish all task button
    5- add to task the local storage
*/
// setting up variables
let theInput = document.querySelector(".add-task input"),
theAddButton = document.querySelector(".add-task .plus"),
tasksContainer = document.querySelector(".tasks-content"),
taskCount = document.querySelector(".tasks-count span"),
taskCompleted = document.querySelector(".tasks-completed span");


// focus on input field 
window.onload = function(){
    theInput.focus();
};
//adding the task
theAddButton.onclick = function (){        
    // if input is empty
    if (theInput.value == ""){
           /*  REMBER USE SWEET ALERT IN LAST  */
        console.log("no value") 
    } else {

       let notTasksMsg = document.querySelector(".no-tasks");
        // check if span with no tasks msg is exit
        if (document.body.contains(document.querySelector(".no-tasks"))){
            //remove no task msg
            notTasksMsg.remove();
        }
        
        // creat main span element
        let mainSpan = document.createElement('span');
        // creat delet button
        let deleteElement = document.createElement('span');
        // creat the main span text 
         let text = document.createTextNode(theInput.value);
         // creat the delete button text
         let deleteText = document.createTextNode('Delete');       
         // add text to main span
         mainSpan.appendChild(text);
         // add class to main span
         mainSpan.className = "task-box";
         // add text to delete button 
        deleteElement.appendChild(deleteText);
        // add calss to delete button
        deleteElement.className = "delete";
         // add delete button to main span
        mainSpan.appendChild(deleteElement);
        // add the task to the container 
        tasksContainer.appendChild(mainSpan);
        //empty the input
        theInput.value ="";
        // focus on field
        theInput.focus();
        // calc tasks
        calcTasks();

    }
};
document.addEventListener('click', function(e){

    // Delete task
    if (e.target.className == 'delete'){
        // remove our task
        e.target.parentNode.remove();
        // check number of tasks inside the container
        if (tasksContainer.childElementCount == 0){
            creatNoTasks();

        }
    }
    // finish task
    if (e.target.classList.contains('task-box')){
        // toggle class finish
        e.target.classList.toggle('finished');
    }    
    // calc tasks
    calcTasks();
    
});
// function to creat no tasks msg
function creatNoTasks(){

    // create msg span Element
    let msgSpan = document.createElement('span');

    // creat the text msg
    let msgText = document.createTextNode(' No tasks to show');
    // add text to msg span element
    msgSpan.appendChild(msgText);
    // add class to msg span
    msgSpan.className = "no-tasks";
    // append msg  span element to the task container
    tasksContainer.appendChild(msgSpan);
}

// funcation to calc tasks
function calcTasks(){
    // calc all tasks
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    // calc completed tasks
    taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}
// delete All method
let deleteAll = document.querySelector('.Delete-All span');

deleteAll.onclick = function (){
    tasksContainer.innerHTML="";
    tasksContainer.innerHTML= `  <span class="no-tasks">No Tasks To show</span> `;
};