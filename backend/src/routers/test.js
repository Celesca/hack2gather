const { Router } = require("express");
const bcrypt = require('bcrypt');
const prisma = require('../db/connection');
const cors = require('cors')

const app = Router();
app.use(cors())
app.get('/test', async (req, res) => {
    res.send("hello world!");
});
module.exports = app;
