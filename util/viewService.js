
function findUserViewsSQL(req){
    let userID = req.params.userID;
    return `SELECT * FROM issView WHEREE userID = ${userID}`;
}

function searchViewByNameSQL(req){
    let name = req.params.name;
    const sql = `SELECT * FROM issView WHERE cFirstName LIKE '%${name}%' OR cLastName LIKE '%${name}%' OR cComName LIKE '%${name}%'`;
    return sql;
}

function searchViewByNamesSQL(req){
    // when a firstname and lastname is given
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    var sql = `SELECT * FROM issView WHERE `;
    sql += ` cFirstName LIKE '%${firstName}%' OR cFirstName LIKE '%${lastName}%' `;
    sql += ` OR cLastName LIKE '%${firstName}%' OR cLastName LIKE '%${lastName}%' `;
    sql += ` OR cComName LIKE '%${firstName}%' OR cComName LIKE '%${lastName}%' `;
    return sql;
}

function searchViewByTypeSQL(req){
    let type = req.params.type;
    const sql = `SELECT * FROM issView WHERE type LIKE '%${type}%' `;
    return sql;
}

function countIssViewSQL(){
    return `SELECT COUNT(*) FROM issView`;
}


module.exports = {
    findUserViewsSQL,
    searchViewByNameSQL,
    searchViewByNamesSQL,
    searchViewByTypeSQL,
    countIssViewSQL
}