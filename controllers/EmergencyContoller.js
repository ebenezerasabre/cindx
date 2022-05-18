const db = require('../db');
const execFunc = require('../util/execFunc');
const emergencyService = require('../util/EmergencyService');


function findAllEmergency(req, res){
    execFunc.excSQL(res, execFunc.findAllSQL(`emergency`), `findAllEmergency error`);
}

function findEmergencyById(req, res){
    const _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`emergency`, _id), `findEmergencyById error`);
}

function countEmergency(req, res){
    execFunc.excSQL(res, execFunc.countAllSQL(`emergency`), `countEmergency error`);
}

/** CREATE */
function createEmergency(req, res){
    execFunc.excSQLCrt(res, emergencyService.createEmergencySQL(req), `createEmergency error`, "", `emergency`);
}

/** UPDATE */
function updateEmergencyResolved(req, res){
    let _id = req.body._id;
    execFunc.excSQLCrt(res, emergencyService.updateEmergencyResolvedSQL(req), `updateEmergencyResolved error`, _id, `emergency`);
}

/** DELETE */
function deleteEmergency(req, res){
    execFunc.excSQL(res, emergencyService.deleteEmergencySQL(req), `deleteEmergency error`);
}


module.exports = {
    findAllEmergency,
    findEmergencyById,
    countEmergency,
    createEmergency,
    updateEmergencyResolved,
    deleteEmergency
}