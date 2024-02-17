const addTask = document.getElementById("addTask");
let inputTask = document.getElementById("inputTask");
const taskList = document.querySelector(".app .taskList ul");

addTask.addEventListener("click", () => {
    if (inputTask.value !== "") {
        const inputTaskValue = inputTask.value;
        const hr = document.createElement("hr");
        const newTask = document.createElement("li");
        
        newTask.innerHTML = `<div class="task">
                                
                                <div class="label">
                                    <h3>${inputTaskValue}</h3>
                                </div>
                            </div>
                            <div class="btn-grp">
                                <img src="cancle.svg" alt="cancle button" id="cancel-btn">
                                <img src="delete.svg" alt="delete icon" id="delete-btn">
                            </div>
                            `;

        taskList.appendChild(newTask);
        taskList.appendChild(hr);
        inputTask.value = "";
        saveData();
        eventlistners();

    }
});

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
    eventlistners();

}

function eventlistners() {
    taskList.querySelectorAll("li").forEach(task => {
        // Event listener for check button
        task.querySelector(".task").addEventListener("click", () => {
            if (!task.querySelector(".label").classList.contains("cancel")) {
                task.querySelector(".task .label").classList.toggle("checked");
                saveData();
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
            task.nextSibling.style.display = "none";
            saveData();
        });
    });
}
showData();
