import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/ProductSlices"

export const store = configureStore({
    reducer:{
        product : productReducer
    }
})