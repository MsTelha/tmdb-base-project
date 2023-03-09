import { movieActions } from "../reducers/movieReducer";
import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* showPopular(props) {
  // console.log(props.count);
  const movies = yield axios({
    url: "https://api.themoviedb.org/3/movie/popular",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      page: props.count,
    },
  });
  yield put({
    type: movieActions.showPopular,
    count: props.count,
    movies,
  });
}

function* showNowPlaying(props) {
  console.log("jhdvsg");
  const nowPlaying = yield axios({
    url: "https://api.themoviedb.org/3/movie/now_playing",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      page: props.count,
    },
  });

  yield put({
    type: movieActions.showNowPlaying,
    count: props.count,
    nowPlaying,
  });
  // console.log(nowPlaying);
}
function* showUpComing(props) {
  const upComing = yield axios({
    url: "https://api.themoviedb.org/3/movie/upcoming",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      page: props.count,
    },
  });
  yield put({ type: movieActions.showUpComing, count: props.count, upComing });
  console.log(upComing);
}
function* showTopRated(props) {
  let topRated = yield axios({
    url: "https://api.themoviedb.org/3/movie/top_rated",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      page: props.count,
    },
  });
  yield put({ type: movieActions.showTopRated, count: props.count, topRated });
  // console.log(topRated);
}

function* movieSaga() {
  yield takeEvery("showMovies", showPopular);
  yield takeEvery("showNowPlaying", showNowPlaying);
  yield takeEvery("showUpComing", showUpComing);
  yield takeEvery("showTopRated", showTopRated);
}

export default movieSaga;
