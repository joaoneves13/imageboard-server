const express = require('express')
const imageRouter = require('./image/router')
const port = process.env.PORT || 4000
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)

app.listen(port, console.log(`Listening on: ${port}`))
