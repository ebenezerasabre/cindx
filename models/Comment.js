class Comment{
    constructor(_id, userID, issueID, comment, date){
        this._id = _id;
        this.userID = userID;
        this.issueID = issueID;
        this.comment = comment;
        this.date = date;
    }
}

module.exports = Comment;