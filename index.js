// index.js
// This script simulates a Vite-like server launch log while serving static files
// from the 'src' directory using Node.js's built-in modules.

const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');

const port = 32100;
const rootDir = path.join(__dirname, 'src');

// Function to get the local network IP address
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // Skip over internal and non-IPv4 addresses
            if ('IPv4' !== iface.family || iface.internal !== false) {
                continue;
            }
            return iface.address;
        }
    }
    return 'localhost';
}

const localIp = getLocalIpAddress();

// Create the server
const server = http.createServer((req, res) => {
    // Determine the file path
    let filePath = path.join(rootDir, req.url === '/' ? 'index.html' : req.url);

    // Read the file and serve it
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file not found
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                // Handle other server errors
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Set the content type and serve the file
            let contentType = 'text/html';
            if (filePath.endsWith('.css')) contentType = 'text/css';
            if (filePath.endsWith('.js')) contentType = 'text/javascript';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server and print the custom log
const startTime = Date.now();
server.listen(port, () => {
    const readyTime = Date.now() - startTime;
    console.log(`\n  Flow-HTML v1.0.0  ready in ${readyTime} ms`);
    console.log('\n  ➜  Local:   http://localhost:32100/');
    console.log(`  ➜  Network: http://${localIp}:32100/`);
    console.log('  ➜  press h + enter to show help\n');
});
