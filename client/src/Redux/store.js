import { configureStore } from "@reduxjs/toolkit";
// import authSliceReducer from "./Slice/authSlice.js";
import productSliceReducer from './Slice/productSlice.js'
const store = configureStore({
    reducer: {
        // auth: authSliceReducer,
        products: productSliceReducer,
    },
    devTools: true,
})

export default store;