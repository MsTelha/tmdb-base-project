import { createSlice } from "@reduxjs/toolkit";

const tvShowsData = { tvShows: [] };

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: tvShowsData,
  reducers: {
    showTvShows(state, action) {
      state.tvShows = action.tvShows.data.results;
      // console.log(state.tvShows);
    },
  },
});
export const tvShowsActions = tvShowsSlice.actions;
export default tvShowsSlice;
