const express = require('express');
const { createTrip, getAllTrip, deleteTrip, updateTrip } = require('../controllers/tripController')

const tripRouter = express.Router()

tripRouter.post('/', createTrip)
tripRouter.get('/', getAllTrip)
tripRouter.delete('/:id', deleteTrip)
tripRouter.patch('/:id', updateTrip)

module.exports = {
  tripRouter,
}