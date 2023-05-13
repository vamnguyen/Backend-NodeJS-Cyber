const checkEmpty = (req, res, next) => {
  const { fullName, age, className } = req.body
  if (fullName && age && className) {
    next()
  } else {
    res.status(500).send('Student information invalid!')
  }
}

module.exports = {
  checkEmpty,
}