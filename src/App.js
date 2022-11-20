import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dow Flix</h1>
        <input
          type="text"
          placeholder="Cari film kesayangan anda.."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <div className="movie-wrapper">
            <div className="movie-title">Contoh Title</div>
            <img className="movie-image" src="" />
            <div className="movie-date">11-12-2022</div>
            <div className="movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
