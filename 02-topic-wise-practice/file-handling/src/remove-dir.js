const fs = require('fs');

// Remove an existing directory
fs.rmdir('documents', (error) => {
    if (error) throw error;
    console.log('Directory removed successfully');
});