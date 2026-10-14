import type { Movie } from "../types/movie";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterPath} alt={movie.title} />
      <p>{movie.title}</p>
      <dd>{movie.releaseDate}</dd>
    </div>
  );
}

export default MovieCard;
