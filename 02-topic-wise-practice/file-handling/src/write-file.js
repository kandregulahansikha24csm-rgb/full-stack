const fs = require('fs');

// Write data into a file
fs.writeFile('notes.txt', 'Learning Node.js file handling.', (error) => {
    if (error) throw error;
    console.log('Data written to file successfully');
});