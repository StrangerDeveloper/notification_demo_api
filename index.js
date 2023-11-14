const express = require("express");

const app  = express();

app.use(express.json());


// app.use("/", (req, res) => {
//     console.log("Main Page Connected!");
//     });
app.use("/api", require("./routes/app.routes"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Server is connected on Port: ${PORT} and ready to go. `);
});