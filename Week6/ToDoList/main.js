const taskInput = document.querySelector('.task-input input');
filters = document.querySelectorAll('.filters span');
taskBox = document.querySelector('.task-box');
addingButton = document.querySelector('#addBtn');
remainingBox = document.querySelector('#remaining');
let todos = JSON.parse(localStorage.getItem("todo-list"));
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector('span.active').classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id)
    });
});
function getRemaining(){
    let rem = []
    if (todos) {
    todos.forEach(todo => {
        if (todo.status === "pending") {
            rem.push(todo)
        }
    })
}
    remainingBox.innerHTML = rem.length + " task(s) left"
}
getRemaining()

function showTodo(filter){
    let li =""
    if (todos) {
        todos.forEach((todo,id) => {
            let isCompleted = todo.status == "completed"?"checked":"";
            if (filter === "remaining") {
                filter = "pending"
            }
            if (filter == todo.status || filter == "all") {
                li+=  '<li class="task">'+
                '<label for="'+id+'">'+
                    '<input onclick ="updateStatus(this)" type="checkbox" id="'+id+'"'+isCompleted+'>'+
                    '<p class="isCompleted">'+todo.name+'</p>'+
                '</label>'+
                '<div class="settings">'+
                    '<i onclick="showMenu(this)" class="uil uil-times"></i>'+
                    '<ul class="task-menu">'+
                        '<li onclick="deleteTask('+id+')"><i class="uil uil-trash"></i>Delete</li>'+
                    '</ul>'+
                '</div>'+
            '</li>';  
            }
        }); 
    }
   
    taskBox.innerHTML = li || `<span>No tasks here</span>`;
}
showTodo("all");
function deleteTask(deleteId) {
    todos.splice(deleteId,1)
    localStorage.setItem("todo-list", JSON.stringify(todos))
    showTodo();

}
function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed"
    }else{
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending"
    }
    getRemaining() 
}
function showMenu(selectedTask) {
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click",e => {
        if (e.target.tagName != "I" || e.target!=selectedTask) {
            taskMenu.classList.remove("show");
        }
    })
}
addingButton.addEventListener("click",e =>{
    let userTask = taskInput.value.trim();
    if (userTask) {
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name:userTask, status:"pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos))
        showTodo(all);
        getRemaining();
        window.location.reload();
    }
})
taskInput.addEventListener("keyup", e=> {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name:userTask, status:"pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos))
        showTodo(all);
        getRemaining();
        window.location.reload() ;
    }
})