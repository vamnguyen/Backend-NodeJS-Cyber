const logFeature = (req, res, next) => {
  console.log('this is feature get student list')
  next()
}

module.exports = {
  logFeature,
}