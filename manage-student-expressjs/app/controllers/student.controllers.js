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

const getStudentList = (req, res) => {
  res.status(200).send(studentList)
}

const getInfoSpecificStudentByID = (req, res) => {
  const param = req.params // return object
  const id = param.id

  const index = studentList.findIndex((studentItem) => {
    return studentItem.id == id
  })
  if (index !== -1) {
    res.status(200).send(studentList[index])
  } else {
    res.status(404).send("Not Found!")
  }
}

const createStudent = (req, res) => {
  let student = req.body;
  // console.log(student, typeof student)
  student = {
    ...student,
    id: studentList.length + 1,
  };
  studentList = [...studentList, student];
  res.status(201).send(student)
}

const updateStudentByID = (req, res) => {
  const { id } = req.params
  const { fullName, age, className } = req.body

  const index = studentList.findIndex((student) => student.id == id)
  if (index !== -1) {
    const oldStudent = studentList[index]
    const updateStudent = { ...oldStudent, fullName, age, className }
    studentList[index] = updateStudent
    res.status(200).send(updateStudent)
  } else {
    res.status(404).send("Not Found!")
  }
}

const deleteStudentByID = (req, res) => {
  const { id } = req.params
  const index = studentList.findIndex(student => student.id == id)
  if (index !== -1) {
    // Making 2: use method splice of array
    // Making 1:
    const studentDelete = studentList[index]
    studentList = studentList.filter(student => student.id !== studentDelete.id)
    res.status(200).send(studentDelete)
  } else {
    res.status(404).send("Not Found!")
  }
}
module.exports = {
  getStudentList, getInfoSpecificStudentByID, createStudent, updateStudentByID, deleteStudentByID,
}