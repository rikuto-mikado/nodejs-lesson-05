const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></input></form></body>');

        // Using return with res.end() prevents code execution from continuing to other route handlers
        // If this is the last handler or no code follows, return is optional but recommended for consistency
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        return res.end();
    }

    if (url === '/create-user') {
        // Node.js streams request body in chunks for memory efficiency with large payloads
        // Collect all chunks first, then concatenate and parse when stream ends
        const body = [];
        // 'data' event receives chunks of incoming request body data as Buffer objects
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            // Concatenate all Buffer chunks into a single Buffer and convert to string
            const parsedBody = Buffer.concat(body).toString();
            // Parse URL-encoded form data by splitting on '=' to extract the value (e.g., "username=John" → "John")
            console.log(parsedBody.split('=')[1]);
            // Set HTTP 302 redirect status and Location header to redirect user to homepage after form submission
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

});

server.listen(3000);