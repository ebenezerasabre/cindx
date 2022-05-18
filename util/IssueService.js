function createIssueSQL(req){
    let issue = {...req.body};
    console.log("the issue");
    console.log(issue);
    var sql = `INSERT INTO issue (userID, type, details, resolved, date) `;
    sql += ` VALUES (${issue.userID}, '${issue.type}', '${issue.details}', 0, now())`;
    return sql;
}

function updateIssueDetailsSQL(req){
    let _id = req.body._id;
    let details = req.body.details;
    var sql = `UPDATE issue SET details = '${details}' WHERE _id = ${_id}`;
    return sql;
}

function updateIssueResolvedSQL(req){
    let _id = req.body._id;
    let resolved = req.body.resolved;
    var sql = `UPDATE issue SET resolved = ${resolved} WHERE _id = ${_id}`;
    return sql;
}

module.exports = {
    createIssueSQL,
    updateIssueDetailsSQL,
    updateIssueResolvedSQL
}


