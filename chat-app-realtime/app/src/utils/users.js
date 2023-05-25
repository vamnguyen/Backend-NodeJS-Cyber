let userList = [
  {
    id: "1",
    username: "vamnguyen",
    room: "fullstack",
  },
  {
    id: "2",
    username: "anhminh",
    room: "frontend",
  },
  {
    id: "3",
    username: "minhduy",
    room: "backend",
  },
]

const addUser = (newUser) => userList = [...userList, newUser]
const getUserList = (room) => userList.filter((user) => user.room === room);
const removeUser = (id) => userList = userList.filter((user) => user.id !== id)

module.exports = {
  getUserList, addUser, removeUser
}