// Import readline module
const readline = require("readline");

// Create input/output interface
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Function to calculate array sum
function calculateSum(values) {
let total = 0;


for (let i = 0; i < values.length; i++) {
    total = total + values[i];
}

console.log("\nGiven Array:", values);
console.log("Sum of Elements:", total);


}

// Get numbers from the user
rl.question("Enter array values separated by commas: ", function (input) {


// Convert input into an array of numbers
const values = input.split(",").map(Number);

// Calculate and display the sum
calculateSum(values);

// Close the interface
rl.close();


});
