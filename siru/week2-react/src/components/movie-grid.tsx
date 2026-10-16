import MovieCard from "./movie-card";
import { movies } from "../data/movies";
import { useState } from "react";

function MovieGrid() {
  const [movieList, setMovieList] = useState(movies);

  function handleBookmark(movieId: number) {
    setMovieList((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  }

  return (
    <>
      <div className="movie-grid">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onBookmark={handleBookmark} />
        ))}
      </div>
    </>
  );
}

export default MovieGrid;
