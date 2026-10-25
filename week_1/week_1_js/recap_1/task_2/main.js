let x1 = Number(prompt("Enter x coordinate of the first point:"));
let y1 = Number(prompt("Enter y coordinate of the first point:"));
let x2 = Number(prompt("Enter x coordinate of the second point:"));
let y2 = Number(prompt("Enter y coordinate of the second point:"));

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.getElementById("result").textContent ="The distance between the two points is: "
+ distance.toFixed(2);