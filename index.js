const express = require("express");

const app  = express();

app.use(express.json());


app.use("/", (req, res) => {
    console.log("Main Page Connected!");
    });
app.use("/api", require("./routes/app.routes"));



app.listen(4000, function(){
    console.log("Server is connected and ready to go.");
});