const fs = require('fs');

// Read the file asynchronously
fs.readFile('data.txt', 'utf8', (error, content) => {
    if (error) {
        console.log('Error while reading file');
        return;
    }

    console.log('File content:');
    console.log(content);
});