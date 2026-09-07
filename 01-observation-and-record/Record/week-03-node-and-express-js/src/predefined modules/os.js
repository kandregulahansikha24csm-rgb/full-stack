const os = require('os');

console.log('System Platform:', os.platform());
console.log('System Architecture:', os.arch());
console.log('Number of CPU Cores:', os.cpus().length);