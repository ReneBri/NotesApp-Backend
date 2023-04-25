const express = require('express');

const app = express();

const usersRouter = require(`${__dirname}/routes/usersRouter`);

const topicRouter = require(`${__dirname}/routes/topicRouter`);

app.use(express.json());

app.use('/topics', topicRouter);

app.use('/users', usersRouter)

module.exports = app;