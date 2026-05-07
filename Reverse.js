let input = document.getElementById("input");
let output = document.getElementById("output");

input.oninput = function (){
    let reversed = input.value .split("") .reverse() .join("");

    output.textContent = reversed;
}