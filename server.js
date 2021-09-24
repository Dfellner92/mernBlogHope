const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// mongoose
mongoose.connect(
  "mongodb+srv://Dfellner92:!Mega24fan@cluster0.zsg4k.mongodb.net/mernBlog?retryWrites=true&w=majority"
);

// data schema
const movieSchema = {
  title: String,
  genre: String,
  year: String,
};

const Movie = mongoose.model("Movie", movieSchema);

// API routes
app.get("/movies", (req, res) => {
  Movie.find().then((movies) => res.json(movies));
});

app.listen(port, function () {
  console.log("express is running");
});
