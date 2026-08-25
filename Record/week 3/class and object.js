// Theme: Radha Krishna Devotees

// Class
class Devotee {

    // Constructor
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }

    // Method
    display() {
        console.log("Devotee Name :", this.name);
        console.log("Place        :", this.place);
    }
}

// Creating Objects
let devotee1 = new Devotee("Radha", "Vrindavan");
let devotee2 = new Devotee("Krishna", "Mathura");
// Calling Methods
console.log("=== Devotee 1 Details ===");
devotee1.display();

console.log();

console.log("=== Devotee 2 Details ===");
devotee2.display();
