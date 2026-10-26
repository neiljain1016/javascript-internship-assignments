
const score = 85;

// Step 1: Check the score using if...else
if (score >= 0 && score <= 100) {
  console.log("Score: " + score);
} else {
  console.log("Invalid score");
}

// Step 2: Determine the letter grade using switch
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Grade: " + grade);

// Step 3: Determine pass or fail using a ternary operator
const status = score >= 40 ? "Passed" : "Failed";

console.log("Status: " + status);
