const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('task_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

// Model Definition
const Task = sequelize.define(
  'Task',
  {
    name: {
      type: DataTypes.STRING, // varchar(255),
      allowNull: false // not null
    },
    status: {
      type: DataTypes.STRING
    }
  },
)

const createTask = async (name, status) => {
  // Making 1:
  // const newTask = Task.build({ name, status, })
  // await newTask.save()

  // Making 2:
  const newTask = await Task.create({ name, status })
}
// createTask('Become Fullstack', 'PENDING')

// Find all Tasks
const getAllTask = async () => {
  const taskList = await Task.findAll()
  console.log('All tasks:', JSON.stringify(taskList, null, 2))
}
// getAllTask()

const getTaskById = async (id) => {
  const task = await Task.findOne({
    where: {
      id,
    }
  })
  console.log('Task:', JSON.stringify(task, null, 2))
}
// getTaskById(4)

const updateTaskById = async (id, data) => {
  await Task.update(
    data,
    {
      where: { id }
    },
  )
}
// updateTaskById(7, { name: 'Learn Frontend', status: 'FINISH' })

const deleteTaskById = async (id) => {
  await Task.destroy({
    where: { id }
  })
}
deleteTaskById(1)


// Model synchronization
const syncModel = async () => {
  // await Task.sync({ force: true }); // delete old table and create new table <=> PUT
  await Task.sync({ alter: true }); // update old table <=> PATCH
  console.log("The table for the Task model was just (re)created!");
};
syncModel();

const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
checkConnect()