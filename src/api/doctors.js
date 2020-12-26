//const { poolPromise } = require('../config/mssql_sqlauth')
const { poolPromise } = require('../config/mssql_winauth')  

//To List
exports.list = async function(req, res) {
    try {  
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query('select * from tbdef_doctors', function(err, result) {  
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

//Create new doctor record
exports.create = async function(req, res) {
    try {  

        let id = req.body.id;
        let msg = req.body.message;
        let practice = req.body.practice;
        let str = req.body.str;

        const pool = await poolPromise;  
        const result = await pool.request()  
            .query("insert into tbdef_doctors (doctor, message, practice, str) values ('" + id + "', '"+ msg + "', '" + practice +"', '"+ str +"')", function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'Doctor record was successfuly created!'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        });  
    } 
};

//Update doctor record by id
exports.update_by_id = async function(req, res) {
    try {  

        let msg = req.body.message;
        let str = req.body.str;
        let id = req.params.id;

        const pool = await poolPromise;  
        const result = await pool.request()  
            .query("update tbdef_doctors set message= '"+ msg + "', str= '"+ str +"' where doctor='" + id + "'", function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        key: req.params.id,
                        success: true,
                        message: 'Record was successfuly updated!',
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.json({ 
            key: req.params.id,
            success: false,
            message: err.message,
        }); 
    } 
};