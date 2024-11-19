const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs');
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
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, school, degree,education_level,rating, description, password,confirm_password } = req.body;

  if (!firstName || !lastName || !email || !school || !degree || !education_level || !rating || !description || !password || !confirm_password) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }
  // if (password !== confirm_password) {
  //          return res.status(400).json({ error: 'Passwords do not match' });
  //      }
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        school,
        degree,
        education_level,
        rating,
        description,
        password: hashedPassword,
        confirm_password
      }
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering :", error);
    res.status(500).json({ error: 'Error saving user' });
  }
});


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
