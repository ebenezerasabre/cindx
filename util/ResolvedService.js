function createResolvedSQL(req){
    let resolved = {...req.body};
    var sql = `INSERT INTO resolved(issueID, date) VALUES ('${resolved.issueID}', date())`;
    return sql;
}


module.exports = {
    createResolvedSQL
}