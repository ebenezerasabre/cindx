exports.findIssueComments = (req) => {
    const issueID = req.params.issueID;
    return `SELECT * FROM comment WHERE issueID = ${issueID}`;
}

exports.findUserComments = (req) => {
    const userID = req.params.userID;
    return `SELECT * FROM comment WHERE userID = ${userID}`;
}

exports.countAllComments = () => {
    return `SELECT COUNT(*) FROM comment`;
}

exports.countIssueComments = (req) => {
    let issueID = req.params.issueID;
    return `SELECT COUNT(*) FROM comment WHERE issueID = ${issueID}`;
}

exports.createComment = (req) => {
    let comment = {...req.body};
    var sql = `INSERT INTO comment(userID, issueID, comment, date) `;
    sql += ` VALUES(${comment.userID}, ${comment.issueID}, '${comment.comment}', now())`;
    return sql;
}

exports.updateComment = (req) => {
    let comment = {...req.body};
   return`UPDATE comment SET comment = '${comment.comment}' WHERE _id = ${comment._id}`;
}

exports.deleteComment = (req) => {
    let commentID = req.params.id;
    return `DELETE FROM comment WHERE _id = ${commentID}`;
}

