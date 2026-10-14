export default function Header() {
  return (
    <div className="header">
      <nav className="navi">
        <div className="logo-grid">
          <img className="logo-img" src="../../public/icons/movie.svg" />
          <p className="logo-text">UMCine</p>
        </div>
        <div className="category">
          <p>영화</p>
          <p>검색</p>
          <p>내 정보</p>
        </div>
      </nav>

      <div className="utility">
        <button className="search">
          <img className="search-img" src="../../public/icons/search.svg" />
        </button>
        <button className="login">로그인</button>
      </div>
    </div>
  );
}
