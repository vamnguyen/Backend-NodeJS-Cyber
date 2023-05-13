const { Sequelize } = require('sequelize')
const { DB, HOST, PASSWORD, USER, dialect } = require('../configs/db.config')
const { createStudentModel } = require('./student.model')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
})

const Student = createStudentModel(sequelize)

module.exports = {
  sequelize, Student,
}