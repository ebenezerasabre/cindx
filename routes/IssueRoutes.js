const express = require('express');
const issueRouter = express.Router();
const issueController = require('../controllers/IssueController');

issueRouter.get('/', issueController.findAllIssues);
issueRouter.get('/count', issueController.countAllIssues);
issueRouter.get('/:id', issueController.findIssueById);
issueRouter.post('/', issueController.createIssue);
issueRouter.put('/details', issueController.updateIssueDetails);
issueRouter.put('/resolved', issueController.updateIssueResolved);


module.exports = issueRouter;