import { configureStore } from "@reduxjs/toolkit";
import sidePanelSlice from "./sidePanelSlice";
import cacheSearchSlice from "./cacheSearchSlice";
import searchResultSlice from "./searchResultSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        sidePanel: sidePanelSlice,
        cacheSearch: cacheSearchSlice,
        searchResult: searchResultSlice,
        chat: chatSlice
    }
});

export default appStore;
