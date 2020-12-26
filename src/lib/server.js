const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var port = process.env.PORT || 5000;

var ApiRouter = require('../routes/main');

app.use('', ApiRouter);
app.listen(port);

console.log('Server is running on port ' + port);