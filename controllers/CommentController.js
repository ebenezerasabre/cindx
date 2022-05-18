const execFunc = require('../util/execFunc');
const commentService = require('../util/CommentService');

exports.findAllComments = (req, res) => {
    execFunc.excSQL(res, execFunc.findAllSQL(`comment`), `findAllComments error`);
}

exports.findCommentById = (req, res) => {
    const _id = req.params.id;
    execFunc.excSQL(res, execFunc.findByIdSQL(`comment`, _id), `findCommentById error`);
}

exports.findIssueComments = (req, res) => {
    execFunc.excSQL(res, commentService.findIssueComments(req), `findIssueComments error`);
}

exports.findUserComments = (req, res) => {
    execFunc.excSQL(res, commentService.findUserComments(req), `findUserComments error`);
}

exports.countAllComments = (req, res) => {
    execFunc.excSQL(res, commentService.countAllComments(), `countAllComments erro`);
}

exports.countIssueComments = (req, res) => {
    execFunc.excSQL(res, commentService.countIssueComments(req), `countIssueComments error`);
}

exports.createComment = (req, res) => {
    execFunc.excSQLCrt(res, commentService.createComment(req), `createComments error`,"", `comment` )
}

exports.updateComment = (req, res) => {
    let _id = req.params.id;
    execFunc.excSQLCrt(res, commentService.updateComment(req), `updateComment error`, _id, `comment`);
}

exports.deleteComment = (req, res) => {
    execFunc.excSQL(res, commentService.deleteComment(req), `deleteComment error`);
}

//  sep 2019 
//  