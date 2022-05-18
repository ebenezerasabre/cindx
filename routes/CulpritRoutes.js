const express = require('express');
const culpritRouter = express.Router();
const culpritController = require('../controllers/CulpritController');

culpritRouter.get('/', culpritController.findAllCulprits);
culpritRouter.get('/count', culpritController.countAllCulprits);
culpritRouter.get('/:id', culpritController.findCulpritById);
culpritRouter.post('/', culpritController.createCulprit);
culpritRouter.put('/update/image', culpritController.updateCulpritImage);

module.exports = culpritRouter;
