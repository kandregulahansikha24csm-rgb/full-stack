const os = require("os");
const path = require("path");
const fs = require("fs");

// os module
console.log("Operating System:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Home Directory:", os.homedir());

// path module
const filePath = path.join(__dirname, "sample.txt");
console.log("File Path:", filePath);

// fs module
const content = "This file was created using the Node.js fs module.";
fs.writeFileSync(filePath, content, "utf8");

const fileData = fs.readFileSync(filePath, "utf8");
console.log("File Content:", fileData);
