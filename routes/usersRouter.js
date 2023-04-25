
const express = require('express');

const userControllers = require(`${__dirname}/../controllers/usersControllers`);

const usersRouter = express.Router();

usersRouter
    .route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createUser);

usersRouter
    .route('/:id')
    .get(userControllers.getSingleUser);

module.exports = usersRouter;