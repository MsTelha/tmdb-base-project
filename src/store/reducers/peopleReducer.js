import { createSlice } from "@reduxjs/toolkit";


const popularPeopleData = {popularPeople:[]}
const popularPeopleSlice = createSlice({
    name:"popularPeople",
    initialState:popularPeopleData,
    reducers:{
      showPopularPeople(state, action){
      state.popularPeople = action.persons.data.results;
      console.log(state.popularPeople);
      }  
    }
})

export const popularPeopleActions = popularPeopleSlice.actions;
export default popularPeopleSlice