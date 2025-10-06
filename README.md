# Node.js HTTP Server - Lesson 05

## What I Learned

- Creating HTTP server with `http.createServer()`
- Handling different routes using URL matching
- Processing POST request body data using streams (`req.on('data')` and `req.on('end')`)
- Node.js streams request body in chunks for memory efficiency
- Parsing URL-encoded form data
- Implementing HTTP redirects with status code 302
- Using `return res.end()` to prevent further code execution

## Challenges

- Understanding the asynchronous nature of request body streaming - response must be sent inside `req.on('end')` callback, not outside
- Properly structuring HTML tags in correct order
- Remembering to use `===` instead of `==` for strict equality
