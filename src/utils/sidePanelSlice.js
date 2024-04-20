import { createSlice } from "@reduxjs/toolkit";

const sidePanelSlice = createSlice({
    name: "sidePanel",
    initialState: {
        isSidePanelOpen : true,
    },
    reducers:{
        toggleSidePanel: (state) => {
            state.isSidePanelOpen = !state.isSidePanelOpen;
        },
        hideSidePanel: (state) => {
            state.isSidePanelOpen = false
        }
    }

})

export const { toggleSidePanel, hideSidePanel } = sidePanelSlice.actions
export default sidePanelSlice.reducer