const { Station } = require('../models');

const createStation = async (req, res) => {
  const { name, address, province } = req.body
  try {
    const newStation = await Station.create({ name, address, province })
    res.status(201).send(newStation)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllStation = async (req, res) => {
  try {
    const stationList = await Station.findAll()
    res.status(200).send(stationList)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getSpecificStation = async (req, res) => {
  const { id } = req.params
  try {
    const specificStation = await Station.findOne({
      where: {
        id
      }
    })
    res.status(200).send(specificStation)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateStation = async (req, res) => {
  const { id } = req.params
  const { name, address, province } = req.body
  try {
    let stationUpdate = await Station.findOne({
      where: {
        id
      }
    })
    stationUpdate.name = name
    stationUpdate.address = address
    stationUpdate.province = province
    await stationUpdate.save()
    res.status(200).send(stationUpdate)
  } catch (error) {
    res.status(404).send('Not Found!')
  }
}

const deleteStation = async (req, res) => {
  const { id } = req.params
  try {
    await Station.destroy({
      where: {
        id
      }
    })
    res.status(200).send(`Deleted successfully station id: ${id}`)
  } catch (error) {
    res.status(404).send('Not Found!')
  }
}

module.exports = {
  createStation, getAllStation, getSpecificStation, updateStation, deleteStation,
}