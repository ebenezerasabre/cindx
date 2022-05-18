const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'ccindx',
    password: 'ASABREeben11021995',
    database: 'cindx'
});
db.connect(function(err){
    if(err) throw err;
    console.log('mysql database connected');
});
module.exports = db;
