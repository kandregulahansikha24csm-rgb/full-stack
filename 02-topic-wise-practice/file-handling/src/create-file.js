const fs = require('fs');

// Create an empty file
fs.writeFile('student.txt', '', (error) => {
    if (error) throw error;
    console.log('New file created successfully');
});