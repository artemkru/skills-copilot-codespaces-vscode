// Create web server
const http = require('http');

// Create an HTTP server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set response status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!\n'); // Send response body
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`); // Log server start message
});