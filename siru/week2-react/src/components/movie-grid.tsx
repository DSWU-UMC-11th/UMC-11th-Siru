import MovieCard from "./movie-card";
import { movies } from "../data/movies";

function MovieGrid() {
  return (
    <>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieGrid;
