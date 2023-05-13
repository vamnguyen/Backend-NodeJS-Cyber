const { getList, getDetail, addStudent, updateStudent, deleteStudent, } = require('../services/student.services')

const getStudentList = async (req, res) => {
  const studentList = await getList()
  if (studentList) {
    res.status(200).send(studentList)
  } else {
    res.status(404).send('Not Found!')
  }
}

const getInfoSpecificStudentByID = async (req, res) => {
  const param = req.params // return object
  const id = param.id

  const student = await getDetail(id)
  if (student) {
    res.status(200).send(student)
  } else {
    res.status(404).send("Not Found!")
  }
}

const createStudent = async (req, res) => {
  let student = req.body;
  const newStudent = await addStudent(student)
  res.status(201).send(newStudent)
}

const updateStudentByID = async (req, res) => {
  // get data from client
  const { id } = req.params
  const student = req.body
  // handle
  const updatedStudent = await updateStudent(id, student)
  if (updatedStudent) {
    res.status(200).send(updatedStudent)
  } else {
    res.status(404).send('Not Found!')
  }
}

const deleteStudentByID = async (req, res) => {
  const { id } = req.params

  const studentDeleted = await deleteStudent(id)
  if (studentDeleted) {
    res.status(200).send(studentDeleted)
  } else {
    res.status(404).send('Not Found!')
  }
}
module.exports = {
  getStudentList, getInfoSpecificStudentByID, createStudent, updateStudentByID, deleteStudentByID,
}