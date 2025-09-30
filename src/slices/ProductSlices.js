import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

//! URL link
const dataURL = ("http://localhost:3000/product")

//*fetch data 
export const fetchProductData = createAsyncThunk("product/fetch", async () => {
    const res = await axios.get(dataURL)
    console.log(res)
    return res.data
})

//*Delete data
export const deleteProductData = createAsyncThunk("product/delete", async (id) => {
    const res = await axios.delete(`${dataURL}/${id}`);
    return id;
})

//*post data 
export const postProductData = createAsyncThunk("product/post", async (newData) => {
    const res = await axios.post(dataURL, newData)
    return newData
})



const initialState = {
    product: [],
    isloading: true,
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //! fetch data 
        builder.addCase(fetchProductData.pending, (state) => {

            state.isloading = true;
        })
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.product = action.payload
            state.isloading = false
        })
        builder.addCase(fetchProductData.rejected, (state) => {

            state.error = "Data can't fetched !"
            state.isloading = true
        })

        //! delete data
        builder.addCase(deleteProductData.pending, (state) => {
            state.isloading = true;
        })

        builder.addCase(deleteProductData.fulfilled, (state, action) => {
            state.members = state.product.filter((p) => p.id !== action.payload)
            state.isloading = true
        })

        builder.addCase(deleteProductData.rejected, (state) => {

            state.error = "Data not deleted !"
            state.isloading = true
        })

        //! post data
        builder.addCase(postProductData.pending, (state) => {
            state.isloading = true;
        })

        builder.addCase(postProductData.fulfilled, (state, action) => {
            state.product = state.product.push(action.payload)
            state.isloading = false
        })

        builder.addCase(postProductData.rejected, (state) => {
            state.error = "Data not posted !"
            state.isloading = true
        })

    }
})

export default productSlice.reducer