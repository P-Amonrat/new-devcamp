import { createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from './calculateReducer'

const store = configureStore({
    reducer: {
        counter: calculateReducer,
    }
})
console.log("store")
console.log(store)

export default store