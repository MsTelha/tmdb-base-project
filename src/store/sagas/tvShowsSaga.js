import { put, takeEvery } from "redux-saga/effects";
import { tvShowsActions } from "../reducers/tvShowsReducer";
import axios from "axios";

function* tvShows(props) {
  const tvShows = yield axios({
    url: "https://api.themoviedb.org/3/tv/popular",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      page: props.count,
    },
  });
  yield put({ type: tvShowsActions.showTvShows, count: props.count, tvShows });
  // console.log(tvShows);
}
function* tvShowsSaga() {
  yield takeEvery("showTvShows", tvShows);
}

export default tvShowsSaga;
