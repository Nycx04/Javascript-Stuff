function Solve() {
    let value = Number(document.getElementById("input").value);

    let unit = document.querySelector('input[name="unit"]:checked').value;

    let result;

    if (unit === "c") {
        result = (value * (9 / 5)) + 32;
        document.getElementById("output").value = result.toFixed(2) + " °F";
    } 
    else {
        result = (value - 32) * (5 / 9);
        document.getElementById("output").value = result.toFixed(2) + " °C";
    }
}