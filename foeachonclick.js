let buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.onclick = () => {
        document.getElementById("paragraph").textContent = button.textContent;
    };
})