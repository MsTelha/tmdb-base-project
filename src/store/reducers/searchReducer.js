import { createSlice } from "@reduxjs/toolkit";

const searchData = {search:[]}

const searchSlice = createSlice({
    name:"search",
    initialState:searchData,
    reducers:{
        search(state, action){
        console.log("searchReducer");
   state.search = action.searched.data.results
   console.log(state.search);
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice;