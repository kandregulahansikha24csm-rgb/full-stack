const fs = require('fs');

// Create a new directory
fs.mkdir('documents', (error) => {
    if (error) throw error;
    console.log('Directory created successfully');
});
