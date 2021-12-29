import { configureStore } from "@reduxjs/toolkit";
import phoneNumberReducer from "./phoneNumberSlice";

export default configureStore({
    reducer: {
        phoneNumber: phoneNumberReducer
    }
});