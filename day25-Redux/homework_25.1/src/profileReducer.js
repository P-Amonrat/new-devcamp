import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        firstname: 'Stephen',
        lastname: 'Strange',
        age: '45'
    },

    reducers: {
        changeName: (state, firstname) => {
            state.firstname = firstname.payload;
        },
        changeLastname: (state, lastname) => {
            state.lastname = lastname.payload;
        },
        changeAge: (state, age) => {
            state.age = age.payload
        },
    }
})

export default profileReducer.reducer

export const { changeName, changeLastname, changeAge } = profileReducer.actions