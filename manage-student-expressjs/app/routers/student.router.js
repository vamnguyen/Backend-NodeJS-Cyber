const express = require('express')
const { getStudentList, getInfoSpecificStudentByID, createStudent, updateStudentByID, deleteStudentByID } = require('../controllers/student.controllers')
const routerStudent = express.Router()

let studentList = [
  {
    id: 1,
    fullName: "Nguyễn Viết Minh Duy",
    age: 19,
    className: "A1"
  },
  {
    id: 2,
    fullName: "Nguyễn Viết Anh Minh",
    age: 18,
    className: "B1"
  },
  {
    id: 3,
    fullName: "VAM Nguyen",
    age: 20,
    className: "xyz"
  }
]

// get student list (url => http://localhost:6969)
routerStudent.get('/', getStudentList)

// get info detail student (url => http://localhost:6969/id)
routerStudent.get('/:id', getInfoSpecificStudentByID)

// add student
routerStudent.post('/', createStudent)
// Debug createStudent fix student undefined 
// routerStudent.post('/', (req, res) => {
//   console.log(req.body)
//   return res.status(200).json("Ok")
// })

// update info student
routerStudent.put('/:id', updateStudentByID)

// delete student
routerStudent.delete('/:id', deleteStudentByID)


module.exports = routerStudent;