const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3000
const cors = require('cors')
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'mydb'
// });

const app = express()
app.use(express.json())
app.use(cors())

app.get('/v1/healthcheck', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
