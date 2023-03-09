import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { searchActions } from "../reducers/searchReducer";
function* search() {
  console.log("searchSaga");
  const searched = yield axios.get(
    "https://api.themoviedb.org/3/search/company?api_key=a093e094e21d5ba92e49e474419d0710&page=1"
  );
  yield put({ type: searchActions.search, searched });
  console.log(searched);
}

function* searchSaga() {
  yield takeEvery("search", search);
}

export default searchSaga;
