const express = require('express');
const { stationRouter } = require('./stationRouter');

const rootRouter = express.Router()

rootRouter.use('/stations', stationRouter)

module.exports = {
  rootRouter,
}