import { takeEvery, put } from "redux-saga/effects";
import { detailsSliceActions } from "../reducers/detailsReducer";
import axios from "axios";
function* showMovieDetails(id) {
  const moviedetails = yield axios.get(
    `https://api.themoviedb.org/3/movie/${id.param}?api_key=a093e094e21d5ba92e49e474419d0710&language=en-US/`
  );
  yield put({ type: detailsSliceActions.showMovieDetails, moviedetails });
}

function* showTvDetails(id) {
  console.log(id.param);
  const tvdetails = yield axios.get(
    `https://api.themoviedb.org/3/tv/${id.param}?api_key=a093e094e21d5ba92e49e474419d0710&language=en-US`
  );
  yield put({ type: detailsSliceActions.showTvDetail, tvdetails });
}


function* detailsSaga() {
  yield takeEvery("showMovieDetails", showMovieDetails);
  yield takeEvery("showTvDetails", showTvDetails);
}
export default detailsSaga;
