import { takeEvery, put } from "redux-saga/effects";
import { reviewsSliceActions } from "../reducers/reviewReducer";
import axios from "axios";
function* showReviews(id) {

  const review = yield axios.get(`https://api.themoviedb.org/3/movie/${id.param}/reviews?api_key=a093e094e21d5ba92e49e474419d0710&language=en-US&page=1`);
  yield put({ type: reviewsSliceActions.showReviews, review });
  console.log(review);
}

function* reviewsSaga() {
  yield takeEvery("showReviews", showReviews);
}
export default reviewsSaga;
