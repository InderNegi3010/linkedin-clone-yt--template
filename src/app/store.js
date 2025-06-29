import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // this must be a reducer



export default configureStore({
    reducer: {
        user: userReducer,
    }
})