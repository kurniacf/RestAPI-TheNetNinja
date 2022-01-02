const express = require("express");
const mongoose = require("mongoose");

// Set Express
const app = express();

// Connect MongoDB
mongoose.connect("mongodb://localhost/tutorialrest");
mongoose.Promise = global.Promise;

app.use(express.static("public"));
app.use(express.json());
//app.use(express.urlencoded());

// Route
app.use("/api", require("./routes/api"));

// Error handling middleware
app.use(function(err, req, res, next){  
    console.log(err);
    res.status(422).send({
        error: err.message
    });
});


// PORT
app.listen(process.env.port || 4000, function(){
    console.log(`Server is running`);
});

