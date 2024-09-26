const express = require("express")
const dotenv = require("dotenv")

dotenv.config();
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Hello from EC2 machine"
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})