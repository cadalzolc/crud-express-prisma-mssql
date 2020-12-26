const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// Port used by the server
var port = process.env.PORT || 5000;
var router = express.Router();

const sql = require("mssql");
const config = {
    user: 'test',
    password: 'test',
    server: 'CADALZOLC\\SQLEXPRESS19', 
    database: 'DEMO',
    port: 1433 
};

router.use(function(req, res, next) {
    console.log('I am doing some task right now.');
    next();
});

router.get('/', function(req, res){
    res.json({ message: 'Mssql Endpoints!' });
});

//add doctors
router.post('/doctors/add', function(req, res) {

    let id = req.body.id;
    let msg = req.body.message;
    let practice = req.body.practice;
    let str = req.body.str;
  
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        var request = new sql.Request();

        request.query("insert into tbdef_doctors (doctor, message, practice, str) values ('" + id + "', '"+ msg + "', '" + practice +"', '"+ str +"')", function (err, results) {
            
            if (err) console.log(err)

            res.json({ 
                success: true,
                message: 'Record was successfuly created!'
            });

            sql.close();
        });
    });
})

//update doctors by id
router.post('/doctors/update/:id', function(req, res) {

    let msg = req.body.message;
    let str = req.body.str;
    let id = req.params.id;

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        var request = new sql.Request();

        request.query("update tbdef_doctors set message= '"+ msg + "', str= '"+ str +"' where doctor='" + id + "'", function (err, results) {
            
            if (err) console.log(err)

            res.json({ 
                key: req.params.id,
                success: true,
                message: 'Record was successfuly updated!',
            });

            sql.close();
            
        });
    });
})

//Get all doctors
router.get('/doctors', function (req, res) {
   
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        var request = new sql.Request();

        request.query('select * from tbdef_doctors', function (err, results) {
            
            if (err) console.log(err)

            res.json(results.recordset);

            sql.close();
            
        });
    });
});

app.use('/api', router);
app.listen(port);

console.log('Server is running on port ' + port);