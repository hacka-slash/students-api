const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const graduateRoute = require('./routes/graduate');

app.use(bodyParser.json());

app.use('/graduate', graduateRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connected to DB!")
})

app.listen(2000, () => {
    console.log("Listennnn....!")
})