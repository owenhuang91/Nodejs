var mySQL = require('mysql');
var DBOption = {
    host: 'localhost',
    user: 'root',
    password: '1qaz2wsx',
    database: 'charge',
    port: 3306
};
var connection = mySQL.createConnection(DBOption);
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index');
};

exports.ChargeType = function (req, res) {
    connection.query("SELECT * FROM CHARGE_TYPE ORDER BY MAIN_TYPE,SUB_TYPE", function (err, rows, fields) {
        if (err) throw err;
        else res.render('ChargeType', { ChargeTypeData: rows });
    });
    

};

exports.ChargeTypeCreate = function (req, res) {
    var insertSQL = [' INSERT INTO CHARGE_TYPE (MAIN_TYPE, SUB_TYPE,DESCRIPTION,LAST_UPDATED_TIMESTAMP) ',
        ' VALUES(?,?,?,NOW()) '].join('');
    
    connection.query(insertSQL, [req.body.MainType, req.body.SubType, req.body.Description] , function (err, rows, fields) {
        if (err) throw err;
        else res.send({ updateflag: true, returnMessage: "Create successful." });
    });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

