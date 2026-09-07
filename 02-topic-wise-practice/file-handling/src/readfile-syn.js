const fs = require('fs');

// Read the file synchronously
const content = fs.readFileSync('data.txt', 'utf8');

console.log('Data read from file:');
console.log(content);