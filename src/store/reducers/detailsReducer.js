import { createSlice } from "@reduxjs/toolkit";

const detailPageData = { movieDetails: [], tvDetails:[] };
const detailsSlice = createSlice({
  name: "detailsPage",
  initialState: detailPageData,
  reducers: {
    showMovieDetails(state, action) {
      state.movieDetails = action.moviedetails.data;
      console.log(state.movieDetails);
    },
    showTvDetail(state, action) {
      state.tvDetails = action.tvdetails.data;
      console.log(state.tvDetails);
    }
  },
});
export const detailsSliceActions = detailsSlice.actions;
export default detailsSlice
