let C = Number(prompt("Enter temperature in Celsius:"));
let F = (C * 9 / 5) + 32;
let K = C + 273.15;

document.getElementById("celsius").textContent = "Celsius: " + C + " C";

document.getElementById("fahrenheit").textContent = "Fahrenheit: " + F.toFixed(2) + " F";

document.getElementById("kelvin").textContent = "Kelvin: " + K.toFixed(2) + " K";