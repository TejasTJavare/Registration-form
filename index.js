const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/User_info', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.error("Error in Connecting to Database:", error);
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.post("/sign_up", async (req, res) => {
    const { name, email, password } = req.body;

    const data = {
        name,
        email,
        password,
    };

    try {
        await db.collection('users').insertOne(data);
        console.log("Record Inserted successfully");
        return res.redirect('success.html');
    } catch (error) {
        console.error("Error inserting record:", error);
        return res.status(500).send("Error occurred while inserting record");
    }
});

app.get("/", (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": '*'
    });
    return res.redirect('index.html');
});

const server = app.listen(3000, () => {
    console.log("Listening on port 3000");
});
