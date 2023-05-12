const { getList, getDetail, addStudent, updateStudent, deleteStudent, } = require('../services/student.services')

const getStudentList = (req, res) => {
  const studentList = getList()
  if (studentList) {
    res.status(200).send(studentList)
  } else {
    res.status(404).send('Not Found!')
  }
}

const getInfoSpecificStudentByID = (req, res) => {
  const param = req.params // return object
  const id = param.id

  const student = getDetail(id)
  if (student) {
    res.status(200).send(student)
  } else {
    res.status(404).send("Not Found!")
  }
}

const createStudent = (req, res) => {
  let student = req.body;
  const newStudent = addStudent(student)
  res.status(201).send(newStudent)
}

const updateStudentByID = (req, res) => {
  // get data from client
  const { id } = req.params
  const student = req.body
  // handle
  const updatedStudent = updateStudent(id, student)
  if (updatedStudent) {
    res.status(200).send(updatedStudent)
  } else {
    res.status(404).send('Not Found!')
  }
}

const deleteStudentByID = (req, res) => {
  const { id } = req.params

  const studentDeleted = deleteStudent(id)
  if (studentDeleted) {
    res.status(200).send(studentDeleted)
  } else {
    res.status(404).send('Not Found!')
  }
}
module.exports = {
  getStudentList, getInfoSpecificStudentByID, createStudent, updateStudentByID, deleteStudentByID,
}