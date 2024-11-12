const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 5173
const cors = require('cors')
const prisma = require('./db/connection')
const loginRouter = require('./routers/loginRouter')

const app = express()
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
  })
)
app.get('/test', async (req, res) => {
  const employees = await prisma.user.findMany();
  res.send(employees);
});

app.use('/v1', loginRouter);


app.get('/v1/healthcheck', (req, res) => {
  res.send('Hello, World!')
})

app.get('/v1/posts', async (req, res) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

module.exports = app
