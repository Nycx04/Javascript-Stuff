function Addtask() {
    let list = document.getElementById("list");
    let value = document.getElementById("input").value;

    let newList = document.createElement("li");

    newList.textContent = value;
    list.appendChild(newList);
}

function DeleteTask() {
    let list = document.getElementById("list");

    list.lastElementChild.remove();
}