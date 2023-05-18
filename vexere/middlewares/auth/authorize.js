const authorize = (arrType) => (req, res, next) => {
  const user = req.user
  if (arrType.findIndex(ele => ele === user.type) > -1) {
    return next()
  } else {
    res.status(403).send('You are logged in, but not authorize!')
  }
}

module.exports = {
  authorize
}