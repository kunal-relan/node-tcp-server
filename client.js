// A Client Example to connect to the Node.js TCP Server
const net = require('net');
const client = new net.Socket();

client.connect(7070, '127.0.0.1', function() {
    console.log('Connected');
    client.write("Hello 67.205.161.34");
});
client.on('data', function(data) {
    console.log('67.205.161.34 Says : ' + data);
});
client.on('close', function() {
    console.log('Connection closed');
});