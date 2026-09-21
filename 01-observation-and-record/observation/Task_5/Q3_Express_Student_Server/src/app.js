const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Student Server</h1>");
});

// Students route
app.get("/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Hansi",
            course: "CSM"
        },
        {
            id: 2,
            name: "Anjali",
            course: "CSE"
        },
        {
            id: 3,
            name: "Rahul",
            course: "ECE"
        },
        {
            id: 4,
            name: "Priya",
            course: "IT"
        },
        {
            id: 5,
            name: "Kiran",
            course: "CSM"
        }
    ];

    res.json(students);
});

// About route
app.get("/about", (req, res) => {

    res.send(`
        <h1>About Student Server</h1>
        <p>This is an Express.js application.</p>
        <p>It demonstrates routing and HTTP GET requests.</p>
    `);
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});