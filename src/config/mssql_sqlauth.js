'user strict';

const sql = require("mssql");
const config = {
    user: 'test',
    password: 'test',
    server: 'CADALZOLC\\SQLEXPRESS19', 
    database: 'DEMO',
    port: 1433 
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