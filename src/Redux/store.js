import { configureStore } from "@reduxjs/toolkit";
// import authSliceReducer from "./Slice/authSlice.js";
import productSliceReducer from './Slice/productSlice.js'
import authSliceReducer from './Slice/authSlice.js'
const store = configureStore({
    reducer: {
        // auth: authSliceReducer,
        products: productSliceReducer,
        auth: authSliceReducer,
    },
    devTools: true,
})

export default store;