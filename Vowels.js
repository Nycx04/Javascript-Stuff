let input = document.getElementById("input");
let output = document.getElementById("output");
let vowels = "aeiou";
input.oninput = function() {
    let text = input.value.toLowerCase();

    let checkVowels = text.split("").filter((inputchecker) =>{
        return vowels.includes(inputchecker);
    });

output.textContent = checkVowels.length;
}