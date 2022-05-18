const db = require('../db');
const execFunc = require('../util/execFunc');

exports.findAllUsers = (req, res) => {
    execFunc.excSQL(res, execFunc.findAllSQL(`user`), "findAllUsers error");
}

exports.findUserById = (req, res) => {
    const _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`user`, _id), "findUserById error");
}

exports.signInUser = (req, res) => {
    execFunc.excSQL(res, execFunc.signInUserSQL(req), "singInUser error");
}

exports.countAllUsers = (req, res) => {
    execFunc.excSQL(res, execFunc.countAllSQL(`user`), "countAllUsers error");
}

/** CREATE */
exports.createUser = (req, res) => {
     execFunc.excSQLCrt(res, execFunc.createUserSQL(req), "createUser error", "", "user");
}

/** UPDATE USER */
exports.updateUserImage = (req, res) => {
    let _id = req.body._id;
    execFunc.excSQLCrt(res, execFunc.updateUserImageSQL(req), "updateUserImage error", _id, "user");
}



/**
 * A user account can't be deleted
 * when a user deletes his account,
 * his status is set to 0 off
 * @param {A} req 
 * @param {*} res 
 */
 exports.changeUserStatus = (req, res) => {
    let _id = req.body.id;
    execFunc.excSQLCrt(res, execFunc.changeUserStatus(req), "changeUserStatus error", _id, "user");
}


