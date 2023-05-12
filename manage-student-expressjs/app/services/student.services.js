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

const getList = () => {
  if (studentList) {
    return studentList
  } else {
    return false
  }
}

const getDetail = (id) => {
  const index = studentList.findIndex((studentItem) => {
    return studentItem.id == id
  })
  if (index !== -1) {
    return studentList[index]
  } else {
    return false
  }
}

const addStudent = (student) => {
  const newStudent = {
    id: studentList.length + 1,
    ...student,
  };
  studentList = [...studentList, student];
  return newStudent
}

const updateStudent = (id, student) => {
  const index = studentList.findIndex((studentItem) => studentItem.id == id)
  if (index !== -1) {
    const oldStudent = studentList[index]
    const studentUpdate = { ...oldStudent, ...student }
    studentList[index] = studentUpdate
    return studentUpdate
  } else {
    return false
  }
}

const deleteStudent = (id) => {
  const index = studentList.findIndex(student => student.id == id)
  if (index !== -1) {
    // Making 2: use method splice of array
    // Making 1:
    const studentDelete = studentList[index]
    studentList = studentList.filter(student => student.id !== studentDelete.id)
    return studentDelete
  } else {
    return false
  }
}

module.exports = {
  getList, getDetail, addStudent, updateStudent, deleteStudent,
}