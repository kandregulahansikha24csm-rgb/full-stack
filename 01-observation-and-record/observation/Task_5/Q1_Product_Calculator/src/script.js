// Function to calculate total price
function calculateTotal() {

    const productName = document.getElementById("productName").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);

    const result = document.getElementById("result");

    // Validation
    if (productName.trim() === "") {
        result.textContent = "Please enter a product name.";
        return;
    }

    if (quantity <= 0 || price < 0) {
        result.textContent = "Please enter valid quantity and price.";
        return;
    }

    // Calculate total
    const total = quantity * price;

    // Display result
    result.textContent = `Total for ${productName}: ₹${total.toFixed(2)}`;
}

// Get button
const calculateButton = document.getElementById("calculateBtn");

// Add event listener
calculateButton.addEventListener("click", calculateTotal);

// Calculate automatically when quantity changes
document.getElementById("quantity").addEventListener("input", calculateTotal);

// Calculate automatically when price changes
document.getElementById("price").addEventListener("input", calculateTotal);