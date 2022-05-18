const express = require('express');
const commentRouter = express.Router();
const commentController = require('../controllers/CommentController');

commentRouter.get('/', commentController.findAllComments);
commentRouter.get('/issue/:issueID', commentController.findIssueComments);
commentRouter.get('/user/:userID', commentController.findUserComments);
commentRouter.get('/count', commentController.countAllComments);
commentRouter.get('/issue/count/:issueID', commentController.countIssueComments);
commentRouter.get('/:id', commentController.findCommentById);
commentRouter.put('/', commentController.updateComment);
commentRouter.post('/', commentController.createComment);
commentRouter.delete('/:id', commentController.deleteComment);


module.exports = commentRouter;









