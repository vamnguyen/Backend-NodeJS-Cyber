const express = require('express');
const { register, login, uploadAvatar, getAllTrip } = require('../controllers/userController');
const uploadImage = require('../middlewares/upload/upload-image');
const { authenticate } = require('../middlewares/auth/authenticate');

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/profile', authenticate, uploadImage('user'), uploadAvatar)
userRouter.get('/all-trip', getAllTrip)

module.exports = {
  userRouter,
}