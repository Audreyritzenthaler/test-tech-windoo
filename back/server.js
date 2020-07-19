const routes = require('./routes/index')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/ideas', routes.ideas)

app.get('/', (req, res) => {
  res.send({ message: 'YES successfully connected!' })
})

app.listen(port, error => {
  if (error) {
    console.log('Something bad happened...', error)
  } else {
    console.log(`server is listening on port ${port}`)
  }
})