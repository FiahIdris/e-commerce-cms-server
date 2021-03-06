require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes.js')
const errorHandler = require('./middlewares/errorHandler.js')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)
app.use(errorHandler)

// app.listen(port, () => {
//   console.log('running on port local')
// })
module.exports = app;