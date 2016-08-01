var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'owen286236',
    port: 3306
});

connection.connect();

connection.query('SELECT 12 + 34 AS result', function (err, rows, fields) {
    if (err) throw err;
    console.log('The result is: ', rows[0].result);
}); 

connection.end();