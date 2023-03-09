import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { popularPeopleActions } from "../reducers/peopleReducer";
function* PopularPeople() {
  const persons = yield axios.get(
    "https://api.themoviedb.org/3/person/popular?api_key=a093e094e21d5ba92e49e474419d0710&language=en-US&page=1"
  );
  yield put({ type: popularPeopleActions.showPopularPeople, persons });
  // console.log(persons);
}

function* peopleSaga() {
  yield takeEvery("showPopularPeople", PopularPeople);
}

export default peopleSaga;
