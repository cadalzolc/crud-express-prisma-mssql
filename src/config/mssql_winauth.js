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