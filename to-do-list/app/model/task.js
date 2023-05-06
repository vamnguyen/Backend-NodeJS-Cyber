const fs = require('fs')

function readAllTask() {
  const buffer = fs.readFileSync("task.json") // return typeof value hex(16)
  // convert hex data to string
  const taskString = buffer.toString()
  // convert string to object (JS type)
  const taskJSON = JSON.parse(taskString)
  return taskJSON;
}

const createTask = (title, description) => {
  const newTask = {
    id: Math.random().toString(),
    title,
    description
  }
  let taskList = readAllTask()
  // taskList.push(newTask)
  taskList = [...taskList, newTask]
  fs.writeFileSync("task.json", JSON.stringify(taskList))
  return newTask
}

const readDetailTask = (id) => {
  let taskList = readAllTask();
  const task = taskList.find((task) => id === task.id);
  return task;
};

const updateTask = (id, title, description) => {
  let taskList = readAllTask();
  const index = taskList.findIndex((task) => task.id === id)
  if (index !== -1) {
    // make update task 
    const oldTask = taskList[index]
    const newTask = { ...oldTask, title, description }
    taskList[index] = newTask
    fs.writeFileSync("task.json", JSON.stringify(taskList))
    return newTask
  } else {
    // Notify
    return false
  }
}

const deleteTask = (id) => {
  let taskList = readAllTask()
  const index = taskList.findIndex((task) => { task.id === id })
  if (index !== -1) {
    const task = taskList[index]
    taskList = taskList.filter((task) => { task.id !== id })
    fs.writeFileSync("task.json", JSON.stringify(taskList))
    return task
  } else {
    return false
  }
}

module.exports = {
  readAllTask, createTask, readDetailTask, updateTask, deleteTask,
}