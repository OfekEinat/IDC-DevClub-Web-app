import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieComp from './MovieComp';

function MovieListComp() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://www.omdbapi.com/?apikey=165db7f3&s=batman");
      if (response.status === 200) {
        const data = response.data;
        setMovies(data.Search);
      } else {
        console.error(`Error: ${response.status}`);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <MovieComp
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}

export default MovieListComp;
