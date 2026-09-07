// Parent Class
class Vehicle {
constructor(brand) {
this.brand = brand;
}

start() {
    console.log(this.brand + " vehicle has started.");
}


}

// Child Class
class Car extends Vehicle {
constructor(brand, model) {
super(brand); // Calls the parent constructor
this.model = model;
}


drive() {
    console.log(this.brand + " " + this.model + " is moving.");
}

showDetails() {
    console.log("Brand :", this.brand);
    console.log("Model :", this.model);
}


}

// Creating Object of Child Class
const car1 = new Car("Toyota", "Camry");

// Calling Methods
car1.showDetails();
car1.start();   // Inherited from Vehicle
car1.drive();   // Car's own method
