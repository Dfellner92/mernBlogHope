import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "",
      genre: "",
      year: "",
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
  });
  return (
    <div>
      {movies.map((movie) => {
        return (
          <React.Fragment>
            <h1>{movie.title}</h1>
            <h1>{movie.year}</h1>
          </React.Fragment>
        );
      })}
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Login}></Route>
    //     <Route exact path="/register" component={Register}></Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
