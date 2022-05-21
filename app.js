let form = document.getElementById("form");
let taskInput = document.getElementById("taskInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addBtn");

// Form Validation
let formValidation = () => {
    if(taskInput.value === ""){
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    }else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

// Data Collection

let data = [];
let acceptData = () => {
    data.push({
        task: taskInput.value,
        date: dateInput.value,
        description: textArea.value,
    });
    console.log(data);

    createTask();
}

// Creating Tasks

let createTask = () => {
    tasks.innerHTML = "";
    data.map((currentObj, objIndex) => {
        return (tasks.innerHTML += `
            <div class="p-2" id = "${objIndex}">
                <span class="fw-bold fs-5">${currentObj.task}</span>
                <span>${currentObj.date}</span>
                <p>${currentObj.description}</p>
                <span class="options">
                    <i onclick = "editTask(this)" class="fas fa-edit"></i>
                    <i onclick = "deleteTask(this)" class="fas fa-trash-alt"></i>
                </span>
            </div>
            `
        );
    });

    // Function to reset the form

    let resetForm = () => {
        taskInput.value = "";
        dateInput.value = "";
        textArea.value = "";
    };

    resetForm();
}

// Delete Tasks

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
}

// Edit Tasks

let editTask = (e) => {
    let selectTask = e.parentElement.parentElement;
    taskInput.value = selectTask.children[0].innerHTML;
    dateInput.value = selectTask.children[1].innerHTML;
    textArea.value = selectTask.children[2].innerHTML;

    deleteTask(e);
}