let a = Number(prompt("Enter the first side length:"));
let b = Number(prompt("Enter the second side length:"));
let c = Number(prompt("Enter the third side length:"));
let result;

if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    result = "These side lengths do not form a valid triangle.";}

else if (a === b && b === c) {
    result = "The triangle is equilateral.";}

else if (a === b || a === c || b === c) {
    result = "The triangle is isosceles.";}

else if (!(a === b || a === c || b === c)) {
    result = "The triangle is scalene.";}

document.getElementById("result").textContent = result;