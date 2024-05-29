import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"


export const MainStore = configureStore({
    reducer: {
        user: UserReducer
    },
});

export default MainStore;