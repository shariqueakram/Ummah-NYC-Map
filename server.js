const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString('base64');
    next();
});

app.get('/', (req, res) => {
    res.render('index', { nonce: res.locals.nonce });
});

app.post('/add-location', (req, res) => {
    // Here you would normally save the data to a database
    console.log(req.body);
    res.send('Location added');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});