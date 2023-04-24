const express = require('express');

const app = express();

app.use(express.json());

const topicRouter = require(`${__dirname}/routes/topicRouter`);

app.use('/topics', topicRouter)

module.exports = app;