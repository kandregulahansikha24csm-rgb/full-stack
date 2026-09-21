class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} - ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product("Pen", 20),
  new Product("Notebook", 50),
  new Product("Book", 125.50)
];

const productList = document.getElementById("productList");

products.forEach((product) => {
  const item = document.createElement("div");
  item.className = "product";
  item.textContent = product.getDetails();
  productList.appendChild(item);
});
