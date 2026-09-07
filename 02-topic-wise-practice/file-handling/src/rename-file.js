const fs = require('fs');

// Rename the file
fs.rename('student.txt', 'student-data.txt', (error) => {
    if (error) throw error;
    console.log('File renamed successfully');
});