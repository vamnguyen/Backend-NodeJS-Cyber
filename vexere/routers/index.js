const express = require('express');
const { stationRouter } = require('./stationRouter');
const { userRouter } = require('./userRouter');
const { tripRouter } = require('./tripRouter');
const { fingerprintRouter } = require('./test-fingerprint');

const rootRouter = express.Router()

rootRouter.use('/stations', stationRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/trips', tripRouter)
rootRouter.use('/test-fingerprint', fingerprintRouter)

module.exports = {
  rootRouter,
}