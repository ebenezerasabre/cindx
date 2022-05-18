class Culprit{
    constructor(_id, issueID, firstName, lastName, commonName, phone, resident, work, image, date){
        this._id = _id;
        this.issueID = issueID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.commonName = commonName;
        this.phone = phone;
        this.resident = resident;
        this.work = work;
        this.image = image;
        this.date = date;
    }
}
module.exports = Culprit;