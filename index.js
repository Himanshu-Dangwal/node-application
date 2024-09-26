const express = require("express")
const dotenv = require("dotenv")

dotenv.config();
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Changing message again to test the pipeline, I am Himanshu"
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})