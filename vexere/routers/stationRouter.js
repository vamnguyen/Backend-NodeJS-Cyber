const express = require('express');
const { createStation, getAllStation, getSpecificStation, updateStation, deleteStation } = require('../controllers/stationController');
const { checkExist } = require('../middlewares/validations/checkExist');
const { Station } = require('../models');
const { authenticate } = require('../middlewares/auth/authenticate');

const stationRouter = express.Router()

stationRouter.get('/', getAllStation)
stationRouter.get('/:id', getSpecificStation)
stationRouter.post('/', authenticate, createStation)
stationRouter.put('/:id', checkExist(Station), updateStation)
stationRouter.delete('/:id', checkExist(Station), authenticate, deleteStation)

module.exports = {
  stationRouter,
}