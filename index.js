const express = require("express");

// Set Express
const app = express();

app.use(express.json());
//app.use(express.urlencoded());

// Route
app.use("/api", require("./routes/api"));


// PORT
app.listen(process.env.port || 4000, function(){
    console.log(`Server is running`);
});

