const express = require('express');
const { createStation, getAllStation, getSpecificStation, updateStation, deleteStation } = require('../controllers/stationController');
const { checkExist } = require('../middlewares/validations/checkExist');
const { Station } = require('../models');

const stationRouter = express.Router()

stationRouter.get('/', getAllStation)
stationRouter.get('/:id', getSpecificStation)
stationRouter.post('/', createStation)
stationRouter.put('/:id', checkExist(Station), updateStation)
stationRouter.delete('/:id', checkExist(Station), deleteStation)

module.exports = {
  stationRouter,
}