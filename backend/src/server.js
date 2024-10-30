const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 3000
const cors = require('cors')
const loginRouter = require('./routers/loginRouter')

const app = express()
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
  })
)

app.use('/v1', loginRouter);

app.get('/v1/healthcheck', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

module.exports = app
