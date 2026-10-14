import Header from "../components/header";
import MovieGrid from "../components/movie-grid";
function MovieListPage() {
  return (
    <div>
      <Header />
      <h1 className="title">영화 목록</h1>
      <MovieGrid />
    </div>
  );
}

export default MovieListPage;
