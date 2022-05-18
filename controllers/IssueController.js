const db = require('../db');
const execFunc = require('../util/execFunc');
const issueService = require('../util/IssueService');

function findAllIssues(req, res){
    execFunc.excSQL(res, execFunc.findAllSQL(`issue`), `findAllIssues error`);
}

function findIssueById(req, res){
    const _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`issue`, _id), `findIssueById error`);
}

function countAllIssues(req, res){
    execFunc.excSQL(res, execFunc.countAllSQL(`issue`), `countAllIssues error`);
}

/** CREATE */
function createIssue(req, res){
    execFunc.excSQLCrt(res, issueService.createIssueSQL(req), `createIssue error`,"", `issue`);
}

/** UPDATE */
function updateIssueDetails(req, res){
    let _id = req.body._id;
    execFunc.excSQLCrt(res, issueService.updateIssueDetailsSQL(req), `updateIssueDetails error`, _id, `issue`);
}

function updateIssueResolved(req, res){
    let _id = req.body._id;
    execFunc.excSQLCrt(res, issueService.updateIssueResolvedSQL(req), `updateIssueResolved error`, _id, `issue`);
}

module.exports = {
    findAllIssues,
    findIssueById,
    countAllIssues,
    createIssue,
    updateIssueDetails,
    updateIssueResolved
}