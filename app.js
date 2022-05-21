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
        textArea: textArea.value,
    });
    console.log(data);

    createTask();
}

// Creating Tasks

let createTask = () => {
    data.map((currentObj, objIndex) => {
        return (tasks.innerHTML += `
            <div class="p-2" id = "${objIndex}">
                <span class="fw-bold fs-5">${currentObj.task}</span>
                <span>${currentObj.date}</span>
                <p>${currentObj.textArea}</p>
                <span class="options">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
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