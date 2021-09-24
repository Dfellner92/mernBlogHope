import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "",
      genre: "",
      year: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch("/movies")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMovies(jsonRes));
  }, []);

  console.log(movies);
  return (
    <div className="App">
      {movies.map(({ _id, title, genre, year }) => {
        return (
          <div>
            <div>{title}</div>
            <div>{genre}</div>
            <div>{year}</div>

            <br />
          </div>
        )
      })}
    </div>
  );
}

export default App;
