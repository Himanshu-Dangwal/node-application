const express = require("express")
const dotenv = require("dotenv")

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.status(201).send({ message: "Hello from my EC2 machine" });
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})