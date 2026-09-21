// Get HTML elements using their IDs
const message = document.getElementById("message");
const heading = document.getElementById("heading");
const studentImage = document.getElementById("studentImage");

const contentButton = document.getElementById("contentBtn");
const styleButton = document.getElementById("styleBtn");
const attributeButton = document.getElementById("attributeBtn");


// Change Content
contentButton.addEventListener("click", function () {

    heading.textContent = "Content Changed Successfully!";

    message.textContent =
        "JavaScript has dynamically changed the content of this webpage.";
});


// Change Style
styleButton.addEventListener("click", function () {

    heading.style.color = "blue";
    heading.style.fontSize = "35px";

    message.style.color = "green";
    message.style.fontWeight = "bold";
});


// Change Attribute
attributeButton.addEventListener("click", function () {

    studentImage.setAttribute("src", "student2.jpg");

    studentImage.setAttribute(
        "alt",
        "Second Student Image"
    );

});