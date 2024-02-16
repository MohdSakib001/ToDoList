const addTask = document.getElementById("addTask");
let inputTask = document.getElementById("inputTask");
const taskList = document.querySelector(".app .taskList ul");


// let id = 0;

addTask.addEventListener("click", () => {
    if (inputTask.value !== "") {

        const inputTaskValue = inputTask.value;

        const newTask = document.createElement("li");
        newTask.innerHTML = `<div class="task">
                                
                                <div class="label">
                                    <h3>${inputTaskValue}</h3>
                                </div>
                            </div>
                            <div class="btn-grp">
                                <img src="cancle.svg" alt="cancle button" id="cancel-btn">
                                <img src="delete.svg" alt="delete icon" id="delete-btn">
                            </div>`;

        taskList.appendChild(newTask);
        inputTask.value = "";
        saveData();

        // function cursorPointer() {
        //     newTask.querySelector(".label").style.cursor = "pointer";
        //     console.log(newTask.querySelector(".label").textContent)
        //         // newTask.querySelector(".label").style.cursorPointer;
        //         // newTask.querySelector(".label").style.cursorPointer;
        // }
        // cursorPointer();

        // Event listner for checkbutton
        // newTask.querySelector(".task").addEventListener("click", () => {

        //     if (!newTask.querySelector(".label").classList.contains("cancel")) {
        //         console.log("checking...");
        //         newTask.querySelector(".task .label").classList.toggle("checked");
        //         saveData();
        //         console.log("checked");
        //     }

        // });

        // // Event listner for cancel button
        // newTask.querySelector(".btn-grp #cancel-btn").addEventListener("click", () => {

        //     if (!newTask.querySelector(".label").classList.contains("checked")) {
        //         newTask.querySelector(".label").classList.toggle("cancel");
        //         saveData();
        //     }

        // });

        // // Event listner for delete button
        // newTask.querySelector(".btn-grp #delete-btn").addEventListener("click", () => {
        //     newTask.style.display = "none";
        //     saveData();
        // });
        eventlistners();

    }

});

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
    console.log(localStorage.getItem("data"));
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
    eventlistners();

}

function eventlistners() {
    // Reattach event listeners to dynamically added elements
    taskList.querySelectorAll("li").forEach(task => {
        // Event listener for check button
        task.querySelector(".task").addEventListener("click", () => {
            if (!task.querySelector(".label").classList.contains("cancel")) {
                console.log("checking...");
                task.querySelector(".task .label").classList.toggle("checked");
                saveData();
                console.log("checked");
            }
        });

        // Event listener for cancel button
        task.querySelector(".btn-grp #cancel-btn").addEventListener("click", () => {
            if (!task.querySelector(".label").classList.contains("checked")) {
                task.querySelector(".label").classList.toggle("cancel");
                saveData();
            }
        });

        // Event listener for delete button
        task.querySelector(".btn-grp #delete-btn").addEventListener("click", () => {
            task.style.display = "none";
            saveData();
        });
    });
}
showData();
