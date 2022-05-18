const express = require('express');
const resolvedRouter = express.Router();
const resolvedController = require('../controllers/ResolvedController');

resolvedRouter.get('/', resolvedController.findAllResolved);
resolvedRouter.get('/count', resolvedController.countAllResolved);
resolvedRouter.get('/:id', resolvedController.findResolvedById);

module.exports = resolvedRouter;






