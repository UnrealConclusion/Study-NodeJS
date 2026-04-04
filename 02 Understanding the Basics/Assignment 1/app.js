const http = require('http');

const users = ["John Smith", "Alice", "Bob"];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // debug
    // console.log(url);
    // console.log(method);

    if (url === '/') {
        res.write(`<html>
            <head><title>Greetings</title></head>
            <body>
                <h1>Geetings Human</h1>
                <p>Click <a href="/users">here</a> to see all of our users.</p>
            </body>
            </html>`);
        return res.end();
    }
    else if (url === '/users') {
        let userList = "<ul>";
        users.forEach(user => userList += `<li>${user}</li>`);
        userList += "</ul>";

        res.write(`<html>
            <head><title>Users</title></head>
            <body>
                <h1>Users</h1>
                ${userList}
                <p>Are you a user? Click <a href="/create-user">here</a> to become a user.</p>
            </body>
            </html>`);
        return res.end();
    }
    else if (url === '/create-user') {
        res.write(`<html>
            <head><title>Users</title></head>
            <body>
                <title>Become a User</title>
                <h1>Please enter your name</h1>
                <form action="/new-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Send</button>
                </form>
            </body>
            </html>`);
        return res.end();
    }
    else if (url === '/new-user' && method === 'POST') {
        const body = []; 

        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1].split("+").join(" ");
            users.push(username);
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/users'); // send the user back to the user list
            return res.end();
        })
    }
});

server.listen(3000);