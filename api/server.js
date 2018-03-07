const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starWarNames = require('./routes/starwars')
const app = express()
app.use(cors({ credentials: true }))

// load routes here
app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)
starWarNames(app)

app.listen(5000)
console.log('Server listening at 5000')
