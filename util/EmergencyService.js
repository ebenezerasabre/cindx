function createEmergencySQL(req, res){
    let emergency = {...req.body};
    var sql = `INSERT INTO emergency(userID, reason, resolved, date) `;
    sql += ` VALUES(${emergency.userID}, '${emergency.reason}', 0, now())`;
    return sql;
}

function updateEmergencyResolvedSQL(req){
    let _id = req.body._id;
    let resolved = req.body.resolved;
    return `UPDATE emergency SET resolved = ${resolved} WHERE _id = ${_id}`;
}

function deleteEmergencySQL(req){
    let _id = req.params.id;
   return `DELETE FROM emergency WHERE _id = ${_id}`;
}

module.exports = {
    createEmergencySQL,
    updateEmergencyResolvedSQL,
    deleteEmergencySQL,
}