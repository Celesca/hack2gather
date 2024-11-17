const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./db/connection');
const loginRouter = require('./routers/loginRouter');
const session = require('express-session');

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' },
  })
);

// Routes
app.use('/v1', loginRouter);

app.get('/v1/healthcheck', (req, res) => {
  res.send('Hello, World!');
});

app.get('/v1/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
