const { User, sequelize } = require("../models")
const bcryptjs = require('bcryptjs');
// const gravatarUrl = require("gravatar-url");
// const gravatarUrl = import("gravatar-url");
// import gravatarUrl from 'gravatar-url';
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, email, password, numberPhone, type } = req.body
  try {
    // // generate avatar default
    // const avatarUrl = gravatarUrl(email)
    // tạo một chuỗi ngẫu nhiên
    const salt = bcryptjs.genSaltSync(10);
    // mã hóa: salt + password
    const hashPassword = bcryptjs.hashSync(password, salt)
    const newUser = await User.create({ name, email, password: hashPassword, numberPhone, type, })
    res.status(201).send(newUser)
  } catch (error) {
    res.status(500).send(error)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      where: {
        email
      }
    })
    const isAuth = bcryptjs.compareSync(password, user.password)
    if (isAuth) {
      const token = jwt.sign({ email: user.email, type: user.type }, 'vam-nguyen-2k4', { expiresIn: "1h" })
      res.status(200).send({ message: 'Login successfully!', token })
    } else {
      res.status(500).send('Email or password is not correctly!')
    }
  } catch (error) {
    res.status(404).send('User not exists')
  }
}

const uploadAvatar = async (req, res) => {
  const file = req.file
  const urlImage = `http://localhost:3000/${file.path}`
  const user = req.user
  const userFound = await User.findOne({
    where: {
      email: user.email
    }
  })
  userFound.avatar = urlImage
  await userFound.save()
  res.send(userFound)
}

const getAllTrip = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      `select users.name as userName, users.numberPhone, fromSta.name as fromStation, toSta.name as toStation, trips.price from users
      inner join tickets on users.id = tickets.user_id
      inner join trips on trips.id = tickets.trip_id
      inner join stations as fromSta on fromSta.id = trips.fromStation
      inner join stations as toSta on toSta.id = trips.toStation;`
    )
    res.send(results)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  register, login, uploadAvatar, getAllTrip,
}