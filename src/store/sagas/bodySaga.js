import { takeEvery, put } from "redux-saga/effects";
import { bodySliceActions } from "../reducers/bodyReducer";
import axios from "axios";
function* showBody() {
  const body = yield axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=a093e094e21d5ba92e49e474419d0710&language=en-US&page=1"
  );
  yield put({ type: bodySliceActions.showBody, body});

}

function* bodySaga() {
  yield takeEvery("showBody", showBody);
}

export default bodySaga;
