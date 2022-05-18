const db = require('../db');
const execFunc = require('../util/execFunc');
const resolvedService = require('../util/ResolvedService');

function findAllResolved(req, res){
    execFunc.excSQL(res, execFunc.findAllSQL(`resolved`), `findAllResolved error`);
}

function findResolvedById(req, res){
    let _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`resolved`, _id), `findResolvedById error`);
}

function countAllResolved(req, res){
    execFunc.excSQL(res, execFunc.countAllSQL(`resolved`), "countAllResolved error");
}


/**
 * Resolved date is inserted by a trigger action on issue table
 * No need to 
 * Create it
 * Update it
 * Delete it
 */

module.exports = {
    findAllResolved,
    findResolvedById,
    countAllResolved
}