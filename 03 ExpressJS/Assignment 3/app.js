const express = require('express');
const path = require('path');

const app = express();

// statically serve static files
app.use(express.static(path.join(__dirname, 'public')));


// home page
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404 page
app.use((request, response, next) => {
	response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);