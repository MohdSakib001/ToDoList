const addTask = document.getElementById("addTask");
let inputTask = document.getElementById("inputTask");
const taskList = document.querySelector(".app .taskList ul");


let id = 0;

addTask.addEventListener("click", () => {
    if (inputTask.value !== "") {

        const inputTaskValue = inputTask.value;

        const newTask = document.createElement("li");
        newTask.innerHTML = `<div class="task">
                                
                                <div class="label ">
                                    <label for="${++id}">${inputTaskValue}</label>
                                </div>
                            </div>
                            <div class="btn-grp">
                                <img src="cancle.svg" alt="cancle button" id="cancel-btn">
                                <img src="delete.svg" alt="delete icon" id="delete-btn">
                            </div>`;

        taskList.appendChild(newTask);
        inputTask.value = "";
        saveData();

        function cursorPointer() {
            newTask.querySelector(".label").style.cursor = "pointer";
            console.log(newTask.querySelector(".label").textContent)
                // newTask.querySelector(".label").style.cursorPointer;
                // newTask.querySelector(".label").style.cursorPointer;
        }
        cursorPointer();

        // Event listner for checkbutton
        newTask.querySelector(".task").addEventListener("click", () => {

            if (!newTask.querySelector(".label").classList.contains("cancel")) {
                newTask.querySelector(".task .label").classList.toggle("checked");
                saveData();
            }

        });

        // Event listner for cancel button
        newTask.querySelector(".btn-grp #cancel-btn").addEventListener("click", () => {

            if (!newTask.querySelector(".label").classList.contains("checked")) {
                newTask.querySelector(".label").classList.toggle("cancel");
                saveData();
            }

        });

        // Event listner for delete button
        newTask.querySelector(".btn-grp #delete-btn").addEventListener("click", () => {
            newTask.style.display = "none";
            saveData();
        });

    }

});

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
};
showData();