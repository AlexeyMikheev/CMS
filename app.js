const express = require('express');
var bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const orderRouter = require('./routes/order');
const categoryRouter = require('./routes/category');
const positionRouter = require('./routes/position');
const analyticsRouter = require('./routes/analytics');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);
app.use('/api/position', positionRouter);
app.use('/api/analytics', analyticsRouter);

module.exports = app;