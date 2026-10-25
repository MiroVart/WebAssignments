let numbers = [];
let input;

while (true) {
    input = prompt("Enter a number (or 'done' to finish):");
    if (input.toLowerCase() === "done") {
        break;
    }
    numbers.push(Number(input));
}

let evenNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

if (evenNumbers.length > 0) {
    document.getElementById("result").textContent = "Even Numbers: " + evenNumbers.join(", ");
} else {
    document.getElementById("result").textContent = "Even Numbers: None";
}

document.getElementById("end").textContent = "End of program.";