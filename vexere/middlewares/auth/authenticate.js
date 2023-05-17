const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const token = req.header("token") // get value of key: token
  try {
    const decoded = jwt.verify(token, 'vam-nguyen-2k4') // return true or false
    console.log('decoded:', decoded)
    if (decoded) {
      req.user = decoded
      return next()
    } else {
      res.status(401).send('User not login!')
    }
  } catch (error) {
    res.status(401).send('User not login!')
  }
}

module.exports = {
  authenticate,
}