// Class Definition
class Book {
// Constructor
constructor(title, author, price) {
this.title = title;
this.author = author;
this.price = price;
}


// Method
showDetails() {
    console.log("Book Title   :", this.title);
    console.log("Author       :", this.author);
    console.log("Price        :", this.price);
}


}

// Creating Objects
const book1 = new Book("The Alchemist", "Paulo Coelho", 350);
const book2 = new Book("Wings of Fire", "A.P.J. Abdul Kalam", 280);

// Calling Methods
console.log("Book 1 Details");
book1.showDetails();

console.log("\nBook 2 Details");
book2.showDetails();
