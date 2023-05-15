const express = require('express');
const { stationRouter } = require('./stationRouter');
const { userRouter } = require('./userRouter');

const rootRouter = express.Router()

rootRouter.use('/stations', stationRouter)
rootRouter.use('/users', userRouter)

module.exports = {
  rootRouter,
}