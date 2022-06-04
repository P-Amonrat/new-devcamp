import { createSlice } from '@reduxjs/toolkit'
export const editReducer = createSlice({
    name: 'edit',
    initialState: {
        product: [],
        runnerID: 1
    },

    reducers: {
        creteProduct: (state, action) => {
            state.product.push(...action.payload, state.runnerID++)
        }, 
        editProduct: (state, action) => {
            for (let i =0; i < state.runnerID; i++ ) {
                state.editProductName = editProductName.payload;
                state.editStock = editStock.payload;
                state.editCategory = editCategory.payload
            }
        }
    }
})

export default editReducer.reducer

export const { editProductName, editStock, editCategory} = editReducer.actions