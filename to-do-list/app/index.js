// import yargs from "yargs"; // ES6

const yargs = require('yargs') // ES5 (common js)
const fs = require('fs') // file system (build in nodejs)
const { readAllTask, createTask, readDetailTask, updateTask, deleteTask } = require('./model/task')
const chalk = require('chalk');

// create command test
// node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("minh dep trai")
  }
})

// CRUD

// Create - type command: node app/index.js create --title="Learn NodeJS" --description="so easy"
yargs.command({
  command: "create",
  builder: { // args
    title: {
      type: "string"
    },
    description: {
      type: "string"
    }
  },
  handler: (args) => {
    // const { title, description } = args   // init by destructuring
    const newTask = createTask(args.title, args.description)
    console.log('Created new task:', newTask)
  }
})

// Read-all - type command: node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask()
    console.log(chalk.blue("TaskJSON:"), result)
  }
})
// Read-detail - type command: node app/index.js read-detail --id="1"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string"
    }
  },
  handler: (args) => {
    const { id } = args;
    const task = readDetailTask(id);
    if (task) {
      console.log("Task:", task)
    } else {
      console.log("Not Found!")
    }
  }
})

// Update - type command: node app/index.js update --id="123" --title="Learn Jav" --description="so happy"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    }
  },
  handler: (args) => {
    const { id, title, description } = args
    const newTask = updateTask(id, title, description)
    if (newTask) {
      console.log('Updated new Task:', newTask)
    } else {
      console.log(chalk.red('NOT Found!'))
    }
  }
})

// Delete - type command: node app/index.js delete --id="abc"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string"
    },
  },
  handler: (args) => {
    const { id } = args
    const task = deleteTask(id)
    if (task) {
      console.log("After delete:", task)
    } else {
      console.log("Not found to delete!")
    }
  }
})


// Save command created
yargs.parse();