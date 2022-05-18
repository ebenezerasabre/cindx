class Emergency{
    constructor(_id, userID, reason, resolved, date){
        this._id = _id;
        this.userID = userID;
        this.reason = reason;
        this.resolved = resolved;
        this.date = date;
    }
}
module.exports = Emergency;