const fs = require('fs/promises');

async function displayFile() {
    try {
        const content = await fs.readFile('data.txt', 'utf8');
        console.log('File Content:');
        console.log(content);
    } catch (error) {
        console.log('Unable to read the file');
    }
}

displayFile();