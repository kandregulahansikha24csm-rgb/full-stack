const EventEmitter = require('events');

const notifier = new EventEmitter();

notifier.on('welcome', () => {
    console.log('Welcome Event Triggered');
});

notifier.emit('welcome');