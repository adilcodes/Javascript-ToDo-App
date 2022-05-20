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
}

