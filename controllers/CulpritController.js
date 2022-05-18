const db = require('../db');
const execFunc = require('../util/execFunc');

function findAllCulprits(req, res){
    execFunc.excSQL(res, execFunc.findAllSQL(`culprit`), "FindAllCulprits error");
}

function findCulpritById(req, res){
    const _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`culprit`, _id), "findCulpritById error");
}

function countAllCulprits(req, res){
    execFunc.excSQL(res, execFunc.countAllSQL(`culprit`), "countAllCulprits error");
}

/** CREATE */
function createCulprit(req, res){
    execFunc.excSQLCrt(res, execFunc.createCulpritSQL(req), "createCulprit error", "", "culprit");
}


/** UPDATE */
function updateCulpritImage(req, res){
    // what can be updated... only image
    execFunc.excSQL(res, execFunc.updateCulpritImageSQL(req), `updateCulpritImage error`);
}

/** DELETE */
function deleteCulprit(req, res){
    let _id = req.params._id;
    execFunc.excSQL(res, execFunc.deleteSQL(`culprit`, _id), "deleteCulprit error"); 
}






module.exports = {
    findAllCulprits,
    findCulpritById,
    countAllCulprits,
    createCulprit,
    updateCulpritImage,
    deleteCulprit
}