const express = require('express');
const { createStation, getAllStation, getSpecificStation, updateStation, deleteStation } = require('../controllers/stationController');

const stationRouter = express.Router()

stationRouter.get('/', getAllStation)
stationRouter.get('/:id', getSpecificStation)
stationRouter.put('/:id', updateStation)
stationRouter.post('/', createStation)
stationRouter.delete('/:id', deleteStation)

module.exports = {
  stationRouter,
}