import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../Helpers/axiosInstance.js'
import toast from "react-hot-toast";
const initialState = {
    productData: []
}

export const getAllProducts = createAsyncThunk('/auth/products', async () => {
    try {
        const response = axiosInstance.get('/product');
        toast.promise(response, {
            loading: 'we are loading products',
            success: 'products loaded successfully',
            error: 'unable to fetch products'
        })
        const res = await response;
        console.log('response', res.data)
        console.log('response.data', res.data)
        console.log('response.data.products', res.data.products)
        return res.data.products;
    } catch (error) {
        // toast.error(error?.response?.data?.message)
    }
})

export const deleteProduct = createAsyncThunk('product/delete', async (productId) => {
    try {
        const response = axiosInstance.delete(`/product/${productId}`);
        toast.promise(response, {
            loading: 'Deleting Product',
            success: 'Product deleted successfully',
            error: 'unable to delete the Product'
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return;
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            if (action.payload) {
                state.productData = [...action.payload]
            }
        })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                if (action.payload) {
                    console.log('action . payload in deletion', action.payload)
                    state.productData = state.productData.filter(product => product._id !== action.payload.data._id);
                }
            })
    }
})

export const { } = productSlice.actions;
export default productSlice.reducer