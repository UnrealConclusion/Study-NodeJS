const express = require('express');

const app = express();

app.use((request, response, next) => {
	console.log("The first middleware!");
	next();
});

app.use((request, response, next) => {
	console.log("The second middleware!");
	next();
});

app.use('/users', (request, response, next) => {
	response.send('<h1>We have no users yet!</h1>');
});


app.use('/', (request, response, next) => {
	response.send(`
        <h1>Nothing to see here!</h1>
        <p>Click <a href='/users'>here</a> to see our users.</p>`
    );
});


app.listen(3000);