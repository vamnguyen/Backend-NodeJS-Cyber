const express = require('express');
const { stationRouter } = require('./stationRouter');
const { userRouter } = require('./userRouter');
const { tripRouter } = require('./tripRouter');

const rootRouter = express.Router()

rootRouter.use('/stations', stationRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/trips', tripRouter)

module.exports = {
  rootRouter,
}