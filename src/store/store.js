import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieSaga from "../store/sagas/movieSaga";
import movieSlice from "../store/reducers/movieReducer";
import tvShowsSlice from "./reducers/tvShowsReducer";
import tvShowsSaga from "./sagas/tvShowsSaga";
import popularPeopleSlice from "./reducers/peopleReducer";
import peopleSaga from "./sagas/peopleSaga";
import detailsSlice from "./reducers/detailsReducer";
import detailsSaga from "./sagas/detailsSaga";
import bodySlice from "./reducers/bodyReducer";
import bodySaga from "./sagas/bodySaga";
import searchSaga from "./sagas/searchSaga";
import searchSlice from "./reducers/searchReducer";
import reviewsSlice from "./reducers/reviewReducer";
import reviewsSaga from "./sagas/reviewsSaga";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: {
    movieSlice: movieSlice.reducer,
    tvShowsSlice: tvShowsSlice.reducer,
    popularPeopleSlice: popularPeopleSlice.reducer,
    detailsSlice: detailsSlice.reducer,
    bodySlice: bodySlice.reducer,
    searchSlice: searchSlice.reducer,
    reviewsSlice: reviewsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(movieSaga);
sagaMiddleware.run(tvShowsSaga);
sagaMiddleware.run(peopleSaga);
sagaMiddleware.run(detailsSaga);
sagaMiddleware.run(bodySaga);
sagaMiddleware.run(searchSaga);
sagaMiddleware.run(reviewsSaga);

export default store;
