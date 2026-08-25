n// JavaScript Program Using Arrays and Functions
// Theme: Radha Krishna Devotees

console.log("======================================");
console.log("   JavaScript Arrays and Functions");
console.log("      Radha Krishna Devotees");
console.log("======================================");

// Function to display all devotees
function showDevotees(devotees) {
    console.log("\nDevotees List:");
    console.log(devotees.join(", "));
}

// Function to count devotees
function countDevotees(devotees) {
    console.log("\nTotal Devotees:", devotees.length);
}

// Function to display first and last devotee
function firstAndLast(devotees) {
    console.log("\nFirst Devotee:", devotees[0]);
    console.log("Last Devotee:", devotees[devotees.length - 1]);
}

// Function to add a devotee
function addDevotee(devotees, name) {
    devotees.push(name);
    console.log("\nAfter Adding " + name + ":");
    console.log(devotees.join(", "));
}

// Function to remove last devotee
function removeDevotee(devotees) {
    let removed = devotees.pop();
    console.log("\nRemoved Devotee:", removed);
    console.log("Updated List:", devotees.join(", "));
}

// Function to search a devotee
function searchDevotee(devotees, name) {
    if (devotees.includes(name)) {
        console.log("\n" + name + " is found in the devotees list.");
    } else {
        console.log("\n" + name + " is not found.");
    }
}

// Function to display devotees one by one
function displayDevotees(devotees) {
    console.log("\nDevotees One by One:");

    for (let i = 0; i < devotees.length; i++) {
        console.log((i + 1) + ". " + devotees[i]);
    }
}

// Array
let devotees = ["Radha", "Krishna", "Meera", "Sudama"];

// Function Calls
showDevotees(devotees);
countDevotees(devotees);
firstAndLast(devotees);
addDevotee(devotees, "Arjuna");
searchDevotee(devotees, "Krishna");
displayDevotees(devotees);
removeDevotee(devotees);

console.log("\nJavaScript Program Executed Successfully.");
