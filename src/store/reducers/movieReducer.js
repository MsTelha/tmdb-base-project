import { createSlice } from "@reduxjs/toolkit";

const movieData = { popular: [], nowPlaying: [], upComing: [], topRated: [] };
const movieSlice = createSlice({
  name: "movie",
  initialState: movieData,
  reducers: {
    showPopular(state, action) {
      if (action.count === 1) {
        state.popular = action.movies.data.results;
      } else {
        state.popular = [...state.popular, ...action.movies.data.results];
      }
    },
    showNowPlaying(state, action) {
      if (action.count === 1) {
        state.nowPlaying = action.nowPlaying.data.results;
        console.log(state.nowPlaying);
      } else {
        state.nowPlaying = [
          ...state.nowPlaying,
          ...action.nowPlaying.data.results,
        ];
      }
    },
    showUpComing(state, action) {
      console.log("reducerUpComing");
      if (action.count === 1) {
        state.upComing = action.upComing.data.results;
        console.log(state.upComing);
      } else {
        state.upComing = [...state.upComing, ...action.upComing.data.results];
      }
    },
    showTopRated(state, action) {
      console.log("reducerTopRated");
      if (action.count === 1) {
        state.topRated = action.topRated.data.results;
        console.log(state.topRated);
      } else {
        state.topRated = [...state.topRated, ...action.topRated.data.results];
      }
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
