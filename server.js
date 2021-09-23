const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// mongoose
mongoose.connect("mongodb+srv://Dfellner92:!Mega24fan@cluster0.zsg4k.mongodb.net/mernBlog?retryWrites=true&w=majority");

// API routes
app.get('/', ((req, res) => {
    res.send("express is here");
}));

app.listen(port, function() {
    console.log("express is running");
})