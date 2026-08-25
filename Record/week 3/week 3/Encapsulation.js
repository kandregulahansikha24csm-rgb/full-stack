 

// Encapsulation Example

class Temple {

    constructor(name, location) {

        this.name = name;

        this.location = location;

    }
    
    showTemple() {

        console.log("Temple Name :", this.name);

        console.log("Location :", this.location);

    }

}

let temple = new Temple("ISKCON Temple", "Vrindavan");

temple.showTemple();