import { configureStore } from '@reduxjs/toolkit'
import { editReducer } from './components/editSlice';

const store = configureStore ({
    reducer : {
        edit: editReducer
    }
})

export default store;