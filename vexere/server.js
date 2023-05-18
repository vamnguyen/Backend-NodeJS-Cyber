// import library
const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const { rootRouter } = require('./routers');

// init application with express
const app = express()

// convert input data to type JSON
app.use(express.json())

// setup path static file for server to save file and image
const publicDirPath = path.join(__dirname, './public') // return url to public file
app.use('/public', express.static(publicDirPath))

// use router
app.use('/api/v1', rootRouter)


app.listen(3000, async () => {
  console.log('App listening on http://localhost:3000')
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})