const { Router } = require("express");

const cors = require('cors')

const app = Router();
app.use(cors())
app.get('/test', async (req, res) => {
    res.send("hello world!");
});
module.exports = app;
