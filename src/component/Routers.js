import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularPeople from "../pages/People/PopularPeople";
import MovieDetailPage from "../pages/DetailPages/MovieDetailPage";
import TvDetailPage from "../pages/DetailPages/TvDetailPage";
import NowPlaying from "../pages/Movies/NowPlaying";
import TvPopular from "../pages/TvShows/Popular";
import TopRated from "../pages/Movies/TopRated";
import UpComing from "../pages/Movies/UpComing";
import Popular from "../pages/Movies/Popular";
import Home from "../component/Home";
import Error from "../pages/Error";
import LandPage from "./LandPage";
import Search from "../pages/Search/Search";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Popular />} />
          <Route path="/movie/now-playing" element={<NowPlaying />} />
          <Route path="/movie/upcoming" element={<UpComing />} />
          <Route path="/movie/top-rated" element={<TopRated />} />
          <Route path="/tv" element={<TvPopular />} />
          <Route path="/person" element={<PopularPeople />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/tv/:id" element={<TvDetailPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
