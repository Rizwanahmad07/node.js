const http = require('http');

const server = http.createServer((request, response) => {
	response.write('Hello from different World\n');
	response.end();
});

server.listen(900, () => {
	console.log('Server is running...');
});