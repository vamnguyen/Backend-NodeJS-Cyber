const { Student } = require('../models')
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

const getList = async () => {
  const studentList = await Student.findAll()
  if (studentList) {
    return studentList
  } else {
    return false
  }
}

const getDetail = async (id) => {
  const getStudent = await Student.findOne({
    where: {
      id: id,
    }
  })
  if (getStudent) {
    return getStudent
  } else {
    return false
  }
}

const addStudent = async (student) => {
  // can use method (create) or (build and save)
  const newStudent = await Student.create(student)
  return newStudent
}

const updateStudent = async (id, student) => {
  let studentUpdate = await Student.findOne({
    where: {
      id
    }
  })
  if (studentUpdate) {
    studentUpdate.fullName = student.fullName
    studentUpdate.age = student.age
    studentUpdate.className = student.className
    const studentUpdated = await studentUpdate.save()
    return studentUpdated
  } else {
    return false
  }
}

const deleteStudent = async (id) => {
  const studentDelete = await getDetail(id)
  if (studentDelete) {
    await Student.destroy({
      where: {
        id
      }
    })
    return studentDelete
  } else {
    return false
  }
}

module.exports = {
  getList, getDetail, addStudent, updateStudent, deleteStudent,
}