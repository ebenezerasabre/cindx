const express = require('express');
const emergencyRouter = express.Router();
const emergencyController = require('../controllers/EmergencyContoller');


emergencyRouter.get('/', emergencyController.findAllEmergency);
emergencyRouter.get('/count', emergencyController.countEmergency);
emergencyRouter.get('/:id', emergencyController.findEmergencyById);
emergencyRouter.post('/', emergencyController.createEmergency);
emergencyRouter.put('/', emergencyController.updateEmergencyResolved);
emergencyRouter.delete('/:id', emergencyController.deleteEmergency);


module.exports = emergencyRouter;







