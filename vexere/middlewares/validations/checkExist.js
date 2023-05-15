
const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params
    // check station existing
    const station = await Model.findOne({
      where: {
        id,
      }
    })
    if (station) {
      next()
    } else {
      res.status(404).send(`Not Found station ${id}`)
    }
  }
}

module.exports = {
  checkExist,
}