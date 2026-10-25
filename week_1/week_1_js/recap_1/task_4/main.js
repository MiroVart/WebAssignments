let score = Number(prompt("Enter your course assessment score (0-100):"));
let grade;

if (score < 0 || score > 100 || !Number.isFinite(score)) {
    grade = "Invalid score. Please enter a score between 0 and 100.";
} else if (score <= 39) {
    grade = 0;
} else if (score <= 51) {
    grade = 1;
} else if (score <= 63) {
    grade = 2;
} else if (score <= 75) {
    grade = 3;
} else if (score <= 87) {
    grade = 4;
} else {
    grade = 5;
}

if (typeof grade === "number") {
    document.getElementById("result").textContent = "Your grade is: " + grade;
} else {
    document.getElementById("result").textContent = grade;
}