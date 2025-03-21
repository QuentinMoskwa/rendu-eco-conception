const express = require('express');
const { connect } = require('./framework/connexion.js');
const eventRouter = require('./route/event.route.js');
const {sync} = require('./framework/sync.js');
const { dataset } = require('./dataset/dataset.js');

const app = express();

const database = async () => {
    await connect();
    await sync();
    await dataset();
}

database();
app.use(express.json());
app.use('/events', eventRouter);

module.exports = app;