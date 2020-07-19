const connection = require('./config/database')
const routes = require('./routes/index')
const app = express()
const cors = require('cors')

connection.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/ideas', routes.ideas)

app.get('/', (req, res) => {
  res.send({ message: 'YESS successfully connected!' })
})

app.listen(process.env.PORT, error => {
  if (error) {
    console.log('Something bad happened...', error)
  } else {
    console.log(`server is listening on port ${process.env.PORT}`)
  }
})