const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();



let app = express();

const PORT = process.env.PORT || 7000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
 });
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json({ limit: '2mb' }));
 app.use(cors({ origin: '*' }));
 app.use('/assets', express.static(path.join(__dirname, './public')));

 var routes = require('./routes/main');

 app.use('', routes);
 
 app.listen(PORT, () => {
    console.log(`⚡️ Api server is Listening on http://localhost:${PORT}`);
 });