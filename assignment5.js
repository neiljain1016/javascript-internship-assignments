
function calculateArea(length = 5, width = 4) {
  return length * width;
}

const calculateAreaArrow = (length = 5, width = 4) => {
  return length * width;
};

// Standard function with default values
console.log(
  "Standard Function Area (Default 5x4): " +
  calculateArea()
);

// Arrow function with custom values
console.log(
  "Arrow Function Area (Custom 10x3): " +
  calculateAreaArrow(10, 3)
);

// Demonstrate block scope
{
  let blockVar = "I exist only inside this block";
}

try {
  console.log(blockVar);
} catch (error) {
  console.log("Scope Test Error: " + error);
}
