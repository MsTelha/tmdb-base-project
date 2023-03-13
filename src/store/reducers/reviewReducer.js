import { createSlice } from "@reduxjs/toolkit";

const reviewData = { reviews: [] };

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviewData,
  reducers: {
    showReviews(state, action) {
      state.reviews = action.review.data.results;
      // console.log(state.reviews);
    },
  },
});

export const reviewsSliceActions = reviewsSlice.actions;
export default reviewsSlice;
