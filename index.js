const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());


mongoose.connect("mongodb+srv://dbUserDan:12131992@cluster0.yspci.mongodb.net/moviesDB?retryWrites=true&w=majority");

const movieSchema = {
    title: String,
    genre: String,
    year: String
};

const Movie = mongoose.model("Movie", movieSchema);
app.get('/movies', function(req, res) {
    Movie.find().then(movies => res.json(movies));
});

app.listen(port, function () {
    console.log("express is running");
})