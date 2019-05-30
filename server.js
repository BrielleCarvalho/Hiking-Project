const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const hikes = require("./routes/api/hikes");
const tests = require("./routes/api/tests");
const images = require("./routes/api/images");


const app = express();

// Set up body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Get Database URI
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/hikes", hikes);
app.use( "/api/tests", tests);
app.use( "/api/images", images);

// Open up public folder to serve images
app.use(express.static('client'));

// Setup port to 5000 unless deployed to Heroku then use its port.
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server.js is running on port ${port}.`));