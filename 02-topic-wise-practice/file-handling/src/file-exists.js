const fs = require('fs');

// Check whether a file is available
fs.access('notes.txt', fs.constants.F_OK, (error) => {
    if (error) {
        console.log('The file is not available');
    } else {
        console.log('The file is available');
    }
});