import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { searchActions } from "../reducers/searchReducer";


function* search(props) {
  console.log(props.action.query);
  const searched = yield axios({
    url: "https://api.themoviedb.org/3/search/multi",
    method: "get",
    params: {
      api_key: "ef8d01a3e04de710ea19db897e30782e",
      language: "en - US",
      query: props.action.query,
      include_adult:false
    },
  });

  yield put({
    type:searchActions.search,
    searched ,
  });
   console.log(searched);
}

function* searchSaga() {
  yield takeEvery("search", search);
}

export default searchSaga;
