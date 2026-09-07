const path = require('path');

const filePath = 'D:/Projects/NodeJS/index.js';

console.log('File Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Directory:', path.dirname(filePath));