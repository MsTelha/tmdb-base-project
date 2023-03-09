import { createSlice } from "@reduxjs/toolkit";

const bodyData = { body: [] };

const bodySlice = createSlice({
  name: "body",
  initialState: bodyData,
  reducers: {
    showBody(state, action){
     state.body = action.body.data.results
     console.log(state.body);  
    }
  }
});

export const bodySliceActions = bodySlice.actions;
export default bodySlice