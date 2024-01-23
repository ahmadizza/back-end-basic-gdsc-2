const express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

const {setupHandler} = require('./handlers/router.js')

const app = express()
const port = 3000



// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.get('/', (req, res) => {
  res.json({
    "message": "this is home paths"
  })
})

app.use('/', setupHandler(router))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

