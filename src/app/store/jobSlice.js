import { createSlice } from "@reduxjs/toolkit"

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobListings:[],
        filterText:''
    },
    reducers: {
      setJobListings:(state,action)=>{
          state.jobListings = action.payload
      },
      setFilterText:(state,action)=>{
          state.filterText = action.payload
      }
    },
  })

  export const {setJobListings,setFilterText} = jobSlice.actions

  export const selectJobListings = (state)=>state.job.jobListings;
  export const selectFilterText = (state)=>state.job.filterText;


  export default jobSlice.reducer
