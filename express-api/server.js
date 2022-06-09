const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express() // initialize app with express

// middleware
app.use(bodyParser.json()) // use body parser and cors
app.use(cors())

// after middleware add the routes
const things = require('./routes/index') // get this file to use in the route
app.use('/v1/things', things) // anything at that route will be directed to posts, then router will take over

// set a port
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("")
  console.log(`  Llamas are listening on port ${port}  🦙🦙🦙🦙🦙 `)
})
