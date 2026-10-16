import type { Movie } from "../types/movie";

function MovieCard({
  movie,
  onBookmark,
}: {
  movie: Movie;
  onBookmark: (movieId: number) => void;
}) {
  return (
    <div className="movie-card">
      <img className="movie-img" src={movie.posterPath} alt={movie.title} />
      <p>{movie.title}</p>
      <dd>{movie.releaseDate}</dd>

      <button
        type="button"
        onClick={() => onBookmark(movie.id)}
        className={movie.isBookmarked === true ? "bookmark active" : "bookmark"}
      >
        <img
          className="bookmark-img"
          src= {movie.isBookmarked === true ? "../public/icons/bookmark.svg" : "../public/icons/bookmark-outline.svg"}
        />
      </button>
    </div>
  );
}

export default MovieCard;
