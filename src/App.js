import React from 'react';
import './App.css';
import Movie from './movie'

const movieTitles = [
  "matrix",
  "full metal jacket",
  "oldboy",
  "star wars"
];

const movieImages = [
  "matrix img",
  "fmj img",
  "oldboy img",
  "starwars img"
];

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
}

export default App;
