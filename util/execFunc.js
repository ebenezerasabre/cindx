const db = require('../db');

function excSQL(res, sql, errorMsg){
    console.log(sql);
    try{
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.status(200).send(result);
        });
    }
    catch(error){
        console.log(errorMsg);
        console.log(error);
    }
    return;
}


function excSQLCrt(res, sql, errorMsg, _id, table){
    try{
        db.query(sql, (err, result) => {
            if(err) throw err;
            else {
                var newSql = "";
                console.log("_id: " + _id);
                if(_id > 0){ 
                    console.log("Updating old user");
                    newSql = `SELECT * FROM ${table} where _id = ${_id}`;
                }
                else {
                    console.log("Creating new user");
                    console.log(`result.insertId: ${result.insertId}`);
                     newSql = `SELECT * FROM ${table} where _id = ${result.insertId}`;
                }
                console.log(newSql);
                // return user object
                db.query(newSql, (err2, userObj) => {
                    if(err) throw err2;
                    res.status(200).send(userObj);
                });
                return;
            }
        });
    }
    catch(error){
        console.log(errorMsg);
        console.log(error);
    }
    return;
}


function findAllSQL(table){
    return `SELECT * FROM ${table}`;
}

function findByIdSQL(table, _id){
    return `SELECT * FROM ${table} WHERE _id = ${_id}`;
}

function countAllSQL(table){
    return `SELECT COUNT(*) FROM ${table}`;
}

function deleteSQL(table, _id){
    return `DELETE FROM ${table} WHERE _id = ${_id}`;
}

function signInUserSQL(req){
    // userName and phone must be unique
    let userName = req.body.userName;
    let phone = req.body.phone;
    return `SELECT * FROM user WHERE userName = '${userName}' AND phone = '${phone}' `;
}

function createUserSQL(req){
    let user = {...req.body};
    var sql = `INSERT INTO user(firstName, lastName, userName, phone, image, status, date)`;
    sql += ` VALUES( '${user.firstName}', '${user.lastName}', '${user.userName}', '${user.phone}', '${user.image}', 1, now())`;
    console.log(sql);
    return sql;
}

function updateUserImageSQL(req){
    let _id = req.body._id;
    let image = req.body.image;
    console.log('_id ' + _id + " image: " + image);
    const sql = `UPDATE user SET image = '${image}' WHERE _id = ${_id}`;
    return sql;
}

function changeUserStatus(req){
    let _id = req.body.id;
    let status = req.body.status;
    const sql = `UPDATE user SET status = ${status} WHERE _id = ${_id}`;
    return sql;
}

function createCulpritSQL(req){
    let culprit = {...req.body};
    var sql = `INSERT INTO culprit (issueID, firstName, lastName, commonName, phone, resident, work, image, date) `;
    sql += `VALUES(${culprit.issueID}, '${culprit.firstName}', '${culprit.lastName}', '${culprit.commonName}', '${culprit.phone}', '${culprit.resident}', '${culprit.work}', '${culprit.image}', now())`;
    return sql;
}

function updateCulpritImageSQL(req){
    let culpritID = req.body.culpritID;
    let image = req.body.image;
    console.log('_id ' + _id + " image: " + image);
    const sql = `UPDATE culprit SET image = '${image}' WHERE _id = ${culpritID}`;
    return sql;
}

module.exports = {
    excSQL,
    excSQLCrt,
    findAllSQL,
    findByIdSQL,
    countAllSQL,
    deleteSQL,
    signInUserSQL,
    createUserSQL,
    updateUserImageSQL,
    updateCulpritImageSQL,
    changeUserStatus,
    createCulpritSQL
}