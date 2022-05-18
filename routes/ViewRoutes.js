const express = require('express');
const viewRouter = express.Router();
const viewController = require('../controllers/ViewController');

viewRouter.get('/', viewController.findAllViews);
viewRouter.get('/issues/:userID', viewController.findUserViews);
viewRouter.get('/name/:name', viewController.searchViewByName);
viewRouter.post('/names', viewController.searchViewByNames);
viewRouter.get('/type/:type', viewController.searchViewByType)
viewRouter.get('/count', viewController.countIssView);

module.exports = viewRouter;