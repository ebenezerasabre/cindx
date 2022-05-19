const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/UserController');

userRouter.get('/', userController.findAllUsers);
userRouter.get('/count', userController.countAllUsers);
userRouter.post('/sign', userController.signInUser);
userRouter.get('/:id', userController.findUserById);

userRouter.post('/', userController.createUser);
userRouter.put('/image', userController.updateUserImage);
userRouter.put('/status/', userController.changeUserStatus);

module.exports = userRouter;