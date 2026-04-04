const fs = require('fs');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    console.log(url, method);
    
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title><head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    else if (url === '/message' && method === 'POST') {
        const body = []; 
        request.on('data', chunk => {
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, err => {
                response.statusCode = 302; // status code for redirect 
                response.setHeader('Location', '/received'); // redirect the user to /received
                return response.end();
            });
        });
    }
    else if (url === '/received') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Success</title></head>');
        response.write('<body<h1>Got your message</h1></body>');
        response.write('</html>');
        return response.end();
    }

    // send a HTML page as a response
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Hello World</title></head>');
    response.write('<body<h1>Hello World</h1></body>');
    response.write('</html>');
    response.end(); // tells the client that no more data will be coming

    // process.exit(); // shut down the server
}

module.exports = requestHandler;