const express = require('express');

const topicControllers = require(`${__dirname}/../controllers/topicControllers`);

const topicRouter = express.Router();

topicRouter
    .route('/')
    .get(topicControllers.getAllTopics)
    .post(topicControllers.createTopic);

module.exports = topicRouter;