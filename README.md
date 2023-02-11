## Node.JS Api with Microsft SQL Server

###### This is a node.js project that simply describe how to use [express.js](https://expressjs.com/) and connect to Microsoft SQL Database.
###### Using two kind of sql node packages [node-mssql](https://www.npmjs.com/package/mssql) for sql authentication & [msnodesqlv8](https://www.npmjs.com/package/msnodesqlv8) for windows authentication.
  
* list node packages used in project.
  * express (npm install --save express)
  * body-parser (npm install --save body-parser)
  * mssql (npm install --save mssql)
  * msnodesqlv8 (npm install --save msnodesqlv8)
  
## Folder Structure
  - node_modules
  - sql _(Sample table schema)_
  - src
    - api
      - default.js
      - doctor.js
    - config
      - mssql_sqlauth.js
      - mssql_winauth.js
    - lib
      - server.js
    - routes
      - main.js
  - package-lock.json
  - package.json
  
## Define your database server configuration
```javascript
'user strict';

const sql = require("mssql/msnodesqlv8");
const config = {
    server: "CADALZOLC\\SQLEXPRESS19",
    port: "1433",
    database: "DEMO",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

const poolPromise = new sql.ConnectionPool(config)  
    .connect()  
    .then(pool => {  
        console.log('Connected to Microsft SQL Server')  
        return pool  
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {  
    sql, poolPromise  
}
```

## Switching to SQL Authenthication & Windows
###### In your api folder. Change the import reference of your controller file.

```javascript
//const { poolPromise } = require('../config/mssql_sqlauth');
const { poolPromise } = require('../config/mssql_winauth');

//To List
exports.list = async function(req, res) {
    try {  
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query('select * from [table]', function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json(result.recordset);  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
};
```

## You can reference all api controller in your main routes

```javascript
var express = require('express');
var router = express.Router();

var Default = require('../api/default');
var Doctors = require('../api/doctors');

router.get('/', Default.index);
router.get('/doctors', Doctors.list);
router.post('/doctors/create', Doctors.create);
router.post('/doctors/update/:id', Doctors.update_by_id);

module.exports = router;
```

## The script of server.js which is the main entrypoint of your application.
```javascript
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
```

## Run your application

###### In VS Code, type [npm start] to start your server at http://localhost:5000. You can test the api using postam or other api tester.
###### You can also check it in your browser http://localhost:5000/doctors which will display a list of doctors record.

###### For any concern you can reach me here on GitHub.
###### Thank you for partonizing my works.
