const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");

    mongoose.connect(process.env.MONGO_URI, {
    useNewUrLParser: true,
    useUnifiedTopoLogy: true,

}) .then(() => {
    console.log("connected to MongoDB")
})
})

