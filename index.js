const express = require("express");

// Set Express
const app = express();

// Route
app.use("/api", require("./routes/api"));


// PORT
app.listen(process.env.port || 4000, function(){
    console.log(`Server is running`);
});

