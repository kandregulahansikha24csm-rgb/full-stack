const fs = require('fs');

// Delete an existing file
fs.unlink('student-data.txt', (error) => {
    if (error) throw error;
    console.log('File removed successfully');
});