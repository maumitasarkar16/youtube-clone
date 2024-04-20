import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: "like",
    initialState: {
        likeCount: null
    },
    reducers: {
        addLikeCount: (state, action) => {
        
            state.likeCount =  action.payload
        }

    }

});

export const { addLikeCount } = likeSlice.actions;
export default likeSlice.reducer;