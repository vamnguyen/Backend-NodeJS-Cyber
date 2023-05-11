const express = require('express')
const router = require('./routers/root.router')
const bodyParser = require('body-parser')

const app = express()
const port = 6969

// convert (req, res) to json 
app.use(express.json())
// create application/json parser
app.use(bodyParser.json())

app.use(router)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})