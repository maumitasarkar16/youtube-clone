import { createSlice } from "@reduxjs/toolkit";


/**
 * GOAL: To store search results
 */
const searchResultSlice = createSlice({
    name: "searchResult",
    initialState: {
        items : []
    },
    reducers: {
        addSearchResult: (state, action)  => { 
            state.items.push(action.payload)
        },
        clearSearch: (state, action) => {
            state.items.length = 0;
        }
        
    }

});

export const {addSearchResult, clearSearch} = searchResultSlice.actions;
export default searchResultSlice.reducer;