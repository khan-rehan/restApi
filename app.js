const express = require("express");

const app = express();

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middle wares
app.use(cors());
app.use(bodyParser.json());


// IMport Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); //Middle ware

//Route
app.get("/", (req, res) => {
    res.send("we are on home");
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Connected to DB!")
);

// how dp we start listenng to server

app.listen(3000);