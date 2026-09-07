const fs = require('fs');

// Add content to an existing file
fs.appendFile('notes.txt', '\nFile handling is easy!', (error) => {
    if (error) throw error;
    console.log('Content appended successfully');
});