import { configureStore } from "@reduxjs/toolkit";
import sidePanelSlice from "./sidePanelSlice";
import cacheSearchSlice from "./cacheSearchSlice";
import searchResultSlice from "./searchResultSlice";
import chatSlice from "./chatSlice";
import likeSlice from "./likeSlice";

const appStore = configureStore({
    reducer: {
        sidePanel: sidePanelSlice,
        cacheSearch: cacheSearchSlice,
        searchResult: searchResultSlice,
        chat: chatSlice,
        like : likeSlice
    }
});

export default appStore;
