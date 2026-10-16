import Header from "../components/header";
import MovieGrid from "../components/movie-grid";
import Pagination from "../components/pagination";
function MovieListPage() {
  return (
    <div>
      <Header />
      <h1 className="title">영화 목록</h1>
      <MovieGrid />
      <Pagination />
    </div>
  );
}

export default MovieListPage;
