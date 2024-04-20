import { createSlice } from "@reduxjs/toolkit";


/**
 * GOAL: To create cache
 */
const cacheSearchSlice = createSlice({
    name: "cacheSearch",
    initialState: {},
    reducers: {
        addSearchCache: (state, action)  => {
            //state = {...state, ...action.payload}
            Object.assign(state, action.payload);
        },
        
    }

});

export const {addSearchCache, updateSearchCache} = cacheSearchSlice.actions;
export default cacheSearchSlice.reducer;